import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { Hero } from './types/hero';

import { HeroService } from './hero.service';

//HEROES: Hero[];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroService]
})
export class AppComponent implements OnInit{
  title = 'Tour of Heroes';
  heroes: Hero[];
  selectedHero: Hero;

  ngOnInit(): void {
    this.getHeroes();
  }
  constructor(private heroService: HeroService){
    // this.heroes = this.heroService.getHeroes();
  }

  getHeroes(): void {
    //this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
  }

  // function
  onSelect(hero: Hero) : void {
    this.selectedHero = hero;
    console.log(hero.name);
  }
}
