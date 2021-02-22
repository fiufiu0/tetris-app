import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tetris';
  player = {};

  submit: boolean = false;

  gameStart($event) {
    this.player = {
      name: $event.name,
      email: $event.email,
    };
    this.submit = true;
  }

  gameExit() {
  }
}