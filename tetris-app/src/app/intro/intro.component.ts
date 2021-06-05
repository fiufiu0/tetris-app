import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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

  constructor(private _router: Router, private _dataService: DataService, private _fb: FormBuilder) { }
  ngOnInit(): void {
  }

  public formVerify = this._fb.group({
    name: ['', [Validators.required, Validators.minLength(5)]],
    token: ['', [Validators.required, Validators.minLength(4)]],
    color: ['normal', []]
  })

  public startGame(forms) {
    this._dataService.checkToken(forms.value.token).subscribe((data) => {
      let token: any = data;
      if (!token.success) {
        console.log("Wrong! Put token! Minimum 4 numbers.")
      }
      else {
        this._dataService.setData({ name: forms.value.name, token: forms.value.token, color: forms.value.color });
        this._dataService.selectedColor = forms.value.color;
        this._router.navigate(['/game/' + forms.value.color]);
        console.log('Data from inputs: ', forms.value)
      }
    });
  }

}