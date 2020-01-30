import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

heroes: Hero[];
selectedTeam = "";



  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

 onClick(teamClick: string) {
   this.selectedTeam = teamClick;
 }


  constructor(private heroService: HeroService) {

  }

  ngOnInit() {
    this.getHeroes();

  }

}
