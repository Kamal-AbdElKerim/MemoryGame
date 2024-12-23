import { Component, OnInit } from '@angular/core';
import { BoxColorComponent } from "../box-color/box-color.component";
import {NgStyle} from "@angular/common";

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [BoxColorComponent, NgStyle],
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  colors: string[] = ["red", "green", "blue", "yellow", "orange", "yellow", "blue", "yellow", "orange", "yellow", "orange", "yellow","yellow", "orange", "yellow",];
  width: number = 200;
  height: number = 150;

  ngOnInit(): void {
    // Call any initialization logic here
  }

  getDynamicSize(): number {
    const maxSize = 200;
    const minSize = 50;
    const sizeFactor = 12;
    const newSize = Math.max(minSize, maxSize - ((this.colors.length - sizeFactor) * 10));
    console.log(newSize);
    return newSize;
  }
}
