import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule }  from '@angular/router';

import { AppComponent }  from './app.component';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';
import { DashBoardComponent } from './dashboard.component';

import { HeroService } from './hero.service';

const routes: Routes = [{
  path: '',
  redirectTo: '/dashboard',
  pathMatch: 'full'
},{
  path: 'dashboard',
  component: DashBoardComponent,
},{
  path: 'heroes',
  component: HeroesComponent
},{
  path: 'detail/:id',
  component: HeroDetailComponent
}];

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    DashBoardComponent
  ],
  providers:    [ HeroService ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
