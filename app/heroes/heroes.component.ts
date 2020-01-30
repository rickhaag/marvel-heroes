import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];
  hero: Hero;
//    = { 
//     name: 'Iron Man',
//     team: 'Avengers',
//     intelligence: 6,
//     strength: 6,
//     combat: 4,
//     pin: 'ironman-pin'
// };

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
    // for (var i=0; i < this.heroes.length; i++) {
    //   console.log("hero" + this.heroes[i].name);
    // }
  }

  selectedHero: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  
  constructor(private heroService: HeroService) { }

  ngOnInit() {
    // this.addHero(hero);

    this.getHeroes();

    }

  

}
