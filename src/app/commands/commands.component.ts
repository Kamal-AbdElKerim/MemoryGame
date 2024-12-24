import {Component, EventEmitter , Output} from '@angular/core';

@Component({
  selector: 'app-commands',
  standalone: true,
  imports: [],
  templateUrl: './commands.component.html',
  styleUrl: './commands.component.css'
})
export class CommandsComponent {
  started = false;

  @Output() incrementCountEvent = new EventEmitter<boolean>();

  StartGame() : void {
    this.started = true;
    this.incrementCountEvent.emit(this.started);
  }
}
