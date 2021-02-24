import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';


@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {
  @Input() name: string;
  @Output() startGame = new EventEmitter();

  constructor() { }
  ngOnInit(): void {
  }

  start(form: FormGroup) {
    const name = form.value.name;
    const email = form.value.email;

    if (form.valid)
      this.startGame.emit({ name, email });
  }
}