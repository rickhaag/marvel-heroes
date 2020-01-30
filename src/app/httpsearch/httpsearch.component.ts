import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { CompileTemplateMetadata } from '@angular/compiler';


@Component({
  selector: 'app-httpsearch',
  templateUrl: './httpsearch.component.html',
  styleUrls: ['../hero-detail/hero-detail.component.css']
})
export class HttpsearchComponent {

searchParam: any = '';
returnedHero: any = {name:'',connections:{groupAffiliation:''},powerstats:{intelligence:0,strength:0,combat:0}};
searched = false;
hero = {id:0, name:'', team:'', intelligence:0,strength:0,combat:0,pin:''};

  search() {
   this.heroService.returnHero(this.searchParam).subscribe(data => {
      this.returnedHero = data;
      this.hero.name = this.returnedHero.name;
      this.hero.team = this.returnedHero.connections.groupAffiliation;
      this.hero.intelligence = this.returnedHero.powerstats.intelligence;
      this.hero.strength = this.returnedHero.powerstats.strength;
      this.hero.combat = this.returnedHero.powerstats.combat;
      this.hero.pin = this.returnedHero.images.sm;
      document.documentElement.style.setProperty('--int-width', `${this.hero.intelligence}%`);
      document.documentElement.style.setProperty('--str-width', `${this.hero.strength}%`);
      document.documentElement.style.setProperty('--com-width', `${this.hero.combat}%`);
      this.searched = true;
    });
  }

  clearSearch() {
    this.searchParam = '';
  }

  constructor(private heroService: HeroService) { }
}
