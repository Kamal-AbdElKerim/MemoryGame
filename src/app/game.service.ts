import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  colors: string[] = [
    "red", "green", "blue", "yellow", "purple", "orange", "pink", "brown",
    "cyan", "magenta", "indigo", "violet", "lime", "teal", "gold", "silver",
    "beige", "coral", "navy", "olive", "turquoise"
  ];
  gameSequence: string[] = [];
  playerSequence: string[] = [];

  constructor() { }

  generateSequence(length: number): void {
    // Shuffle the colors array
    const shuffledColors = [...this.colors].sort(() => Math.random() - 0.5);

    // Ensure the length of the sequence does not exceed the number of available colors
    const sequenceLength = Math.min(length, this.colors.length);

    // Slice the shuffled array to the desired length (this ensures no duplicates)
    this.gameSequence = shuffledColors.slice(0, sequenceLength);


  }


  CheckingAnswers(RandomColor: string[]): boolean {
    console.log('Generated sequence:', RandomColor);
    if (RandomColor.length !== this.playerSequence.length) {
      console.log("length not")
      return false;
    }
    const isMatching = RandomColor.every((value, index) => value === this.playerSequence[index]);

    if (isMatching) {
      console.log("true")
      return true;
    } else {
      console.log("false")
      return false;
    }
  }
}
