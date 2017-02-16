import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';
// Observable class extensions
import 'rxjs/add/observable/of';
// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { HeroSearchService } from './hero-search.service';
import { Hero } from './hero';

@Component({
	moduleId: module.id,
	selector: 'hero-search',
	templateUrl: './hero-search.component.html',
	// stylesUrl: ['./hero-search.component.css']
})

export class HeroSearchComponent implements OnInit {

	heroes: Observable<Hero[]>;
	private searchTerms = new Subject<string>();

	constructor(
		private heroSearchService: HeroSearchService,
		private router: Router) {};

	ngOnInit(): void {

	    this.heroes = this.searchTerms
	    	.debounceTime(300)        // wait 300ms after each keystroke before considering the term
	    	.distinctUntilChanged()   // ignore if next search term is same as previous
	    	.switchMap(term =>
	    		// switch to new observable each time the term changes
	    		// return the http search observable
	    		// or the observable of empty heroes if there was no search term
	    		term ? this.heroSearchService.search(term) : Observable.of<Hero[]>([]))
	      .catch(error => {
	        // TODO: add real error handling
	        console.log(error);
	        return Observable.of<Hero[]>([]);
	      });
	};

	search(term: string): void {
		this.searchTerms.next(term);
	};

	gotoDetail(hero: Hero): void {
		this.router.navigate(['/detail', hero.id]);
	};

}