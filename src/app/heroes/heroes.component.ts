import { Component, OnInit } from "@angular/core";
import { Hero } from "../hero";
import { HEROESLIST } from "../mock-heroes";
//component decorator
@Component({
  selector: "app-heroes",
  templateUrl: "./heroes.component.html",
  styleUrls: ["./heroes.component.css"]
})
export class HeroesComponent implements OnInit {
  heroes = HEROESLIST;
  selectedHero?: Hero;

  constructor() {}

  ngOnInit() {}

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
