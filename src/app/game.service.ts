import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  colors: string[] = ["red", "green", "blue", "yellow", "purple"];
  gameSequence: string[] = [];
  playerSequence: string[] = [];

  constructor() { }

  generateSequence(length: number): void {
    this.gameSequence = Array.from({ length }, () =>
      this.colors[Math.floor(Math.random() * this.colors.length)]
    );
    console.log('Generated sequence:', this.gameSequence);
  }

  CheckingAnswers(): boolean {
    if (this.gameSequence.length !== this.playerSequence.length) {
      console.log("lengt not")
      return false;
    }
    const isMatching = this.gameSequence.every((value, index) => value === this.playerSequence[index]);

    if (isMatching) {
      console.log("true")
      return true;
    } else {
      console.log("false")
      return false;
    }
  }
}
