import { Component, QueryList, ViewChildren } from '@angular/core';
import { BoxColorComponent } from "../box-color/box-color.component";
import {NgClass, NgForOf, NgIf, NgStyle} from "@angular/common";
import { GameService } from "../game.service";

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [BoxColorComponent, NgStyle, NgForOf, NgClass, NgIf],
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {
  gameSequence: string[] = [];
  randomizedSequence: string[] = [];
  containerWidth: number = 800;
  message: string = '';
  countdown: number = 4;
  StartAnswers: boolean = false;
  score: number = 0;
  Border: string = "rounded-full";
  EndGame: boolean = false;
  Round: number = 2;
  startTime!: number;
  endTime!: number;

  @ViewChildren(BoxColorComponent) boxComponents!: QueryList<BoxColorComponent>;

  constructor(private gameService: GameService) {

  }

  startGame(): void {
    this.StartAnswers = false;
    this.EndGame = false;
    this.countdown = 4;
    this.gameService.generateSequence(this.Round);
    this.gameSequence = this.gameService.gameSequence;
    this.randomizeSequence();
    this.displaySequence();
  }

  randomizeSequence(): void {
    this.randomizedSequence = this.gameSequence
      .slice()
      .sort(() => Math.random() - 0.5);
  }

  displaySequence(): void {
    let delay = 0;
    this.randomizedSequence.forEach((color) => {
      setTimeout(() => {
        const box = this.boxComponents.find((b) => b.color === color);
        if (box) {
          box.highlight();
        }
      }, delay);
      delay += 1000;
    });

    let countdownTimer = setInterval(() => {
      if (this.countdown > 0) {
        this.countdown--;
      } else {
        clearInterval(countdownTimer);
        this.message = 'Start Answers.';
        this.StartAnswers = true;
        this.startTime = Date.now();
      }
    }, 1000);
  }

  handlePlayerClick(color: string): void {
    this.gameService.playerSequence.push(color);
    console.log(this.gameService.playerSequence);


  }

  ResetPlayerSequence(): void {
    this.gameService.playerSequence = [];
  }

  IsGood(): void {
    this.endTime = Date.now();
    if (this.gameService.CheckingAnswers()) {
      const elapsedTime = (this.endTime - this.startTime) / 1000;
      console.log("elapsedTime" , elapsedTime);
      const timeBonus = Math.max(0, 15 - elapsedTime) * 10;
      console.log("timeBonus" , timeBonus);
      this.score += 50 + Math.floor(timeBonus);
      console.log("score" , this.score);
      this.Round++;
      this.startGame();
    } else {
      this.EndGame = true;
      this.message = `Game Over! Your final score is ${this.score}.`;
    }

    this.ResetPlayerSequence();
  }

  getDynamicSize(): number {
    const maxSize = 200;
    const minSize = 50;
    const sizeFactor = 9;
    return Math.max(minSize, maxSize - ((this.gameService.colors.length - sizeFactor) * 10));
  }

  getColumnCount(): number {
    const boxSize = this.getDynamicSize();
    const cols = Math.floor(this.containerWidth / boxSize);
    return cols > 0 ? cols : 1;
  }
}
