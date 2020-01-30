import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location, formatPercent } from '@angular/common';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

    @Input() hero: Hero;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) { }

  
  ngOnInit() {
    this.hero = {id: 0, name: '', team: '', intelligence:0,strength:0,combat:0,pin:''};
    
    this.getHero();
  }

  showHero() {
    console.log(this.hero);
  }

  getHero() {
    const id = +this.route.snapshot.paramMap.get('id');

    this.heroService.getHero(id)
    .subscribe(hero => {
      this.hero = hero;
      document.documentElement.style.setProperty('--int-width', `${this.hero.intelligence}0%`);
      document.documentElement.style.setProperty('--str-width', `${this.hero.strength}0%`);
      document.documentElement.style.setProperty('--com-width', `${this.hero.combat}0%`);
    });
  }

  goBack(): void {
    this.location.back();
  }

}
