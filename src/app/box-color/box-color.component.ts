import {Component , Input} from '@angular/core';

@Component({
  selector: 'app-box-color',
  standalone: true,
  imports: [],
  templateUrl: './box-color.component.html',
  styleUrl: './box-color.component.css'
})
export class BoxColorComponent {
  @Input({ required: true }) color : string = ''

}
