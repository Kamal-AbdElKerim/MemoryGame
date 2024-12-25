import { Component, Input } from '@angular/core';
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-score',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './score.component.html',
  styleUrl: './score.component.css'
})
export class ScoreComponent {

  @Input() countdown!: number;
  @Input() message!: string;
  @Input() score!: number;

}
