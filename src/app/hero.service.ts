import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private heroesUrl = 'api/heroes';
  error: string;

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl);
  }

  getHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Hero>(url)
  }

  setScores(hero: Hero) {
    console.log(hero);
  }

  returnHero(search:string): Observable<object> {

    let nameOrID: string = 'hero';
    const headers = {
                      "x-rapidapi-host": "superhero-search.p.rapidapi.com",
                      "x-rapidapi-key": "5174e80bc3mshbab39ed4e9891afp164a1djsndd99466c958d"
                    };
    
    if (!isNaN(Number(search))) {
      nameOrID = 'id';
    };

    return this.http.get<object>(`https://superhero-search.p.rapidapi.com/?${nameOrID}=${search}`,
      {headers});
    };

  constructor(private http: HttpClient) { }
}

