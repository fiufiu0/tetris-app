import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-info',
  templateUrl: './game-info.component.html',
  styleUrls: ['./game-info.component.css']
})
export class GameInfoComponent implements OnInit {
  @Input() status: string;
  @Input() points: number;
  @Input() time: string;

  constructor() { }

  ngOnInit(): void {
  }

}
