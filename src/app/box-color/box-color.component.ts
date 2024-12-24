import { Component, Input } from '@angular/core';
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
      transition('inactive => active', animate('300ms ease-in')),
      transition('active => inactive', animate('300ms ease-out')),
    ]),
  ]
})
export class BoxColorComponent {
  @Input() color: string = '';
  @Input() width: number = 200;
  @Input() height: number = 150;
  @Input() Border: string = "";

  currentState = 'inactive'; // Default state

  highlight(): void {
    this.currentState = 'active';
    setTimeout(() => {
      this.currentState = 'inactive';
    }, 500); // Reset state after 500ms
  }


}
