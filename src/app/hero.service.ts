import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROESLIST } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessagesService } from './messages.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor(private messageService: MessagesService) {}
  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROESLIST);
    this.messageService.add('Heroes fetched');
    return heroes;
  }

  getHero(id: Number): Observable<Hero> {
    const hero = HEROESLIST.find(h => h.id === id);
    return of(hero);
  }
}
