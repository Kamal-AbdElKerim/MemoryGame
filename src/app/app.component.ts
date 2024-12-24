import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {BodyComponent} from "./body/body.component";
import {CommandsComponent} from "./commands/commands.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // <-- Import this

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , BodyComponent , CommandsComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MemoryGame';

}
