import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { TeamsComponent } from './teams/teams.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HttpsearchComponent } from './httpsearch/httpsearch.component';


const routes: Routes = [
  { path: 'detail/:id', component: HeroDetailComponent},
  { path: 'heroes', component: HeroesComponent},
  { path: 'teams', component: TeamsComponent},
  { path: 'httpsearch', component: HttpsearchComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
