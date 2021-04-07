import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';


@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {
  public name: string;
  public token: string;

  constructor(private _router: Router, private _dataService: DataService) { }
  ngOnInit(): void {
  }

  startGame() {
    this._dataService.setData({ name: this.name, token: this.token });
    this._router.navigateByUrl('/game');
  }

}