import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { GameComponent } from '../game/game.component';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {

  @Output() startEvent = new EventEmitter();

  constructor() { }
  ngOnInit(): void {
  }

  start(form: FormGroup) {
    const name = form.value.name;
    const email = form.value.email;

    if (form.valid)
      this.startEvent.emit({ name, email });
  }
}