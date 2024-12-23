import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {BodyComponent} from "./body/body.component";
import {CommandsComponent} from "./commands/commands.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , BodyComponent , CommandsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MemoryGame';
}
