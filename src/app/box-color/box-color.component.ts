import {Component, Input, OnChanges} from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { NgStyle } from "@angular/common";

@Component({
  selector: 'app-box-color',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './box-color.component.html',
  styleUrls: ['./box-color.component.css'],
  animations: [
    trigger('colorAnimation', [
      state('active', style({ transform: 'scale(1.1)', opacity: 1 })),
      state('inactive', style({ transform: 'scale(1)', opacity: 0.5 })),
      state('hovered', style({ transform: 'scale(1.1)', opacity: 1 })),
      transition('inactive => active', animate('300ms ease-in')),
      transition('active => inactive', animate('300ms ease-out')),
      transition('inactive => hovered', animate('200ms ease-in')),
      transition('hovered => inactive', animate('200ms ease-out')),
    ]),
  ]
})
export class BoxColorComponent implements OnChanges{
  @Input() color: string = '';
  @Input() width: number = 200;
  @Input() height: number = 150;
  @Input() Border: string = '';
  @Input() isRandomized: boolean = false;
  @Input() playerSequence: string[] = [];

  currentState = 'inactive'; // Default state

  ngOnChanges(): void {
    console.log("ttplayerSequence" ,this.playerSequence)
    if (this.playerSequence.includes(this.color)) {
      console.log("this.color" , this.color);
      this.currentState = 'active';
    } else {
      console.log("!this.color" , this.color);
      this.currentState = 'inactive';
    }
  }

  highlight(timer: number): void {
    this.currentState = 'active';
    setTimeout(() => {
      this.currentState = 'inactive';
    }, timer);
  }

  onMouseEnter(): void {
    if (this.isRandomized) {
      this.currentState = 'hovered';
    }
  }

  onMouseLeave(): void {
    if (this.isRandomized) {
      this.currentState = 'inactive';
    }
  }
}
