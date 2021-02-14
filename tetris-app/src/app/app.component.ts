import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  player = {};

  gameStart($event) {
    this.player = {
      name: $event.name,
      email: $event.email,
    };
  }

  gameExit() {
  }
}