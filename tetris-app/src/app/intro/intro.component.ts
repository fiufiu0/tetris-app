import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {
  public name: string;
  public token: string;

  constructor(private _router: Router) { }
  ngOnInit(): void {
  }

  startGame() {
    this._router.navigateByUrl('/game')
  }

}