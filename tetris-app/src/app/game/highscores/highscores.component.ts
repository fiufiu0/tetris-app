import { Component, OnInit, OnChanges } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-highscores',
  templateUrl: './highscores.component.html',
  styleUrls: ['./highscores.component.css']
})
export class HighscoresComponent implements OnInit {
  public playerName;
  public players;

  constructor(private _dataService: DataService) {
    this.readScore();
  }

  ngOnInit(): void {
  }
  ngOnChanges(): void {
    // this.readScore();
  }

  readScore() {
    // this.playerName = this._dataService.getData().name;
    this._dataService.readScore().subscribe((result) => {
      this.players = result;
    });
  };

}
