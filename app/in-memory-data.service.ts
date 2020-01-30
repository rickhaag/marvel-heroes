import { Injectable } from '@angular/core';
// import { InMemoryDataService, InMemoryDbService } from 'angular-in-memory-web-api';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{
  createDb() {
    const heroes = [
      { id: 0, name: 'Iron Man', team: 'Avengers', intelligence: 6, strength: 6, combat: 3, 
        pin: '../assets/images/ironman-pin.jpg'},
        // pin: 'https://www.superherodb.com/pictures2/portraits/11/050/13701.jpg'},
      { id: 1, name: 'Black Widow', team: 'Avengers', intelligence: 3, strength: 3, combat: 6,
        pin: '../assets/images/blackwidow-pin.jpg' },
        // pin: 'https://www.superherodb.com/pictures2/portraits/11/050/12499.jpg'},
      { id: 2, name: 'Black Panther', team: 'Avengers', intelligence: 5, strength: 3, combat: 5,
        pin: '../assets/images/blackpanther-pin.PNG'},
        // pin: 'https://www.superherodb.com/pictures2/portraits/11/050/12586.jpg'},
      { id: 3, name: 'Professor X', team: 'Xmen', intelligence: 7, strength: 4, combat: 4,
        pin: '../assets/images/professorx-pin.jpg'},
        // pin: 'https://www.superherodb.com/pictures2/portraits/11/050/13614.jpg'},
      { id: 4, name: 'Iceman', team: 'Xmen', intelligence: 2, strength: 3, combat: 3,
        pin: '../assets/images/iceman-pin.jpg'},
        // pin: 'https://www.superherodb.com/pictures2/portraits/11/050/13990.jpg'},
      { id: 5, name: 'Nightcrawler', team: 'Xmen', intelligence: 5, strength: 4, combat: 7,
        pin: '../assets/images/nightcrawler-pin.jpg'},
        // pin: 'https://www.superherodb.com/pictures2/portraits/11/050/14362.jpg'},
      { id: 6, name: 'Colossus', team: 'Xmen', intelligence: 4, strength: 7, combat: 5,
        pin: '../assets/images/colossus-pin.jpg'},
        // pin: 'https://www.superherodb.com/pictures2/portraits/10/050/48.jpg'},
      { id: 7, name: 'Daredevil', team: 'Defenders', intelligence: 3, strength: 2, combat: 3,
        pin: '../assets/images/daredevil-pin.jpg'},
        // pin: 'https://www.superherodb.com/pictures2/portraits/11/050/12751.jpg'},
      { id: 8, name: 'Jessica Jones', team: 'Defenders', intelligence: 3, strength: 6, combat: 5,
        pin: '../assets/images/jessicajones-pin.jpg'},
        // pin: 'https://www.superherodb.com/pictures2/portraits/10/050/15089.jpg'},
      { id: 9, name: 'Luke Cage', team: 'Defenders', intelligence: 2, strength: 5, combat: 5,
        pin: '../assets/images/lukecage-pin.jpg'},
        // pin: 'https://www.superherodb.com/pictures2/portraits/11/050/13904.jpg'},
      { id: 10, name: 'Iron Fist', team: 'Defenders', intelligence: 4, strength: 5, combat: 8,
        pin: '../assets/images/ironfist-pin.jpg'},
        // pin: 'https://www.superherodb.com/pictures2/portraits/11/050/15088.jpg'},
      { id: 11, name: 'Hulk', team: 'Avengers', intelligence: 7, strength: 9, combat: 9,
        pin: '../assets/images/hulk-pin.jpg'},
        // pin: 'https://www.superherodb.com/pictures2/portraits/10/050/12494.jpg'},
    ];
    return {heroes};
  }

  constructor() { }
}
