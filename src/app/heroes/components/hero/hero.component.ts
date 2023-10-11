import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent {
  public name: string = 'Ironman';
  public age: number = 45;

  get capitalizeName(): string {
    return this.name.toUpperCase();
  }

  changeHeroName(): void {
    this.name = 'Spiderman';
  }

  changeHeroAge(): void {
    this.age = 30;
  }

  getHeroDescription(): string {
    return `${this.name} ${this.age}`;
  }

  resetForm(): void {
    this.name = 'Ironman';
    this.age = 45;
  }
}
