import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppComponent }  from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { DashboardComponent }  from './dashboard.component';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroSearchComponent }  from './hero-search.component';

import { HeroService } from './hero.service';
import { HeroSearchService } from './hero-search.service';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

@NgModule({
  imports:      [
  	BrowserModule,
  	FormsModule,
	HttpModule,
	InMemoryWebApiModule.forRoot(InMemoryDataService),
	AppRoutingModule
  ],
  declarations: [
  	AppComponent,
  	DashboardComponent,
  	HeroesComponent,
  	HeroDetailComponent,
  	HeroSearchComponent
  ],
  providers: [
  	HeroService,
  	HeroSearchService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
