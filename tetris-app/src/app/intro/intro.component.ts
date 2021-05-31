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
  public token: any;
  public availableColors: any;

  constructor(private _router: Router, private _dataService: DataService) { }
  ngOnInit(): void {
  }

  startGame() {
    // const selectedColor = this.availableColors;
    this._dataService.checkToken(this.token).subscribe((data) => {
      let token: any = data;
      if (!token.success) {
        console.log("Wrong! Put token!")
      }
      else {
        this._dataService.setData({ name: this.name, token: this.token, color: this.availableColors });
        this._dataService.selectedColor = this.availableColors;
        this._router.navigate(['/game/' + this.availableColors]);
      }
    });
  }
}