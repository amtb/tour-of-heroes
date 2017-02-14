import {Component, OnInit} from '@angular/core';

import {Hero} from './hero';

import { HeroService } from './hero.service';

@Component({
    moduleId: module.id,
    selector: 'my-dashboard',
    templateUrl: './dashboard.component.html'
})

export class DashBoardComponent implements OnInit {
    
    heroes: Hero[] = [];
    
    ngOnInit(): void {
        this.getTopHeroes();
    }
    
    constructor(private heroService: HeroService) { };
    
    getTopHeroes(): void {
        this.heroService.getHeroes().then(heroes=> {
            this.heroes = heroes.slice(1, 5);
        });
    }

}