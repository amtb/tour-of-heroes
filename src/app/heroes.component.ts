import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  moduleId: module.id,
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  providers: [HeroService]

})
export class HeroesComponent implements OnInit {
  selectedHero: Hero;
  heroes: Hero[];

  ngOnInit(): void {
    this.getHeroes();
  };

  constructor(
    private heroService: HeroService,
    private router: Router
  ) { };

  onSelect(hero: Hero): void{
    this.selectedHero = hero;
  };

  getHeroes(): void {
    this.heroService.getHeroes().then(
      heroes => {
        this.heroes = heroes;
      }
    );
  };

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  };

  add(heroName: string): void {
    heroName = heroName.trim();
    if (heroName){
      this.heroService.create(heroName)
      .then(hero => {
          this.heroes.push(hero);
          this.selectedHero = null;
       });
    }
  };

  delete(hero: Hero): void {
    this.heroService.delete(hero.id)
      .then(() => {
        this.heroes = this.heroes.filter(h => h !== hero);
        if (this.selectedHero === hero) { this.selectedHero = null; }
      });
  }
}

