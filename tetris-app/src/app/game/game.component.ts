import { Component, OnInit, Input, Output, ViewChild, EventEmitter, HostListener } from '@angular/core';
import { TetrisCoreComponent } from 'ngx-tetris';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
    selector: 'app-game',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.css']
})

export class GameComponent implements OnInit {

    public points: number = 0;
    public status = "Game ready!";
    public seconds: number = 0;
    public time: string = this.toMinute(this.seconds);
    public data: any;
    timeId;

    @ViewChild('game') tetris: TetrisCoreComponent;
    @Output() exitGame = new EventEmitter();
    @Input() player = {
        name: '',
        token: '',
    };

    constructor(private _router: Router, private _dataService: DataService) { }

    ngOnInit(): void {
        this.data = this._dataService.getData();
    }

    updateScore() {
        // funkcja do zapisu wyników
    }

    backIntro() {
        this.tetris.actionStop();
        this.exitGame.emit();
        this.stopTimer();
        this._router.navigateByUrl('/intro');
    }

    gameStart() {
        this.tetris.actionStart();
        this.status = 'Game started!';
        this.startTimer();
    }

    gameStop() {
        this.tetris.actionStop();
        this.status = 'Game paused!';
        this.stopTimer();
    }

    gameReset() {
        this.tetris.actionReset();
        this.status = 'Reset!';
        this.stopTimer();
        this.seconds = 0;
        this.time = this.toMinute(this.seconds);
    }

    countPoints() {
        this.points += 10;
    }

    lineCleared() {
        this.countPoints();
    }

    gameOver() {
        this.status = "Game over! Try again!"
        this.stopTimer();
    }

    toMinute(seconds: number): string {
        let min: number = Math.floor(seconds / 60);
        let sec: number = seconds % 60;
        return (
            min.toString().padStart(2, '0') + ':' + sec.toString().padStart(2, '0')
        );
    }

    startTimer() {
        this.timeId = setInterval(() => {
            this.seconds += 1;
            this.time = this.toMinute(this.seconds);
        }, 1000);
    }

    stopTimer() {
        clearTimeout(this.timeId);
    }

}
