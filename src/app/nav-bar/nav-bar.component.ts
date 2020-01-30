import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  private apiHero: any;

  constructor(   private heroService: HeroService, private http: HttpClient) { }

  ngOnInit() {
  }





}
