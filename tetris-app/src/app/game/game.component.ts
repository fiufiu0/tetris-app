import { Component, OnInit, Input, Output, ViewChild, EventEmitter, HostListener } from '@angular/core';
import { TetrisCoreComponent } from 'ngx-tetris';

@Component({
    selector: 'app-game',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

    points: number = 0;
    status = "Game ready! Press to start!";
    seconds: number = 0;
    time: string = this.toMinute(this.seconds);
    timeId;

    @ViewChild('game') tetris: TetrisCoreComponent;
    @Output() exitEvent = new EventEmitter();
    @Output() gameStatus = new EventEmitter();
    @Input() player = {
        name: '',
        email: '',
    };
    constructor() { }

    ngOnInit(): void {
    }

    @HostListener('window:keydown', ['$event'])
    keyEvent(event: KeyboardEvent): void {
        if (event.key === 'w') {
            this.tetris.actionRotate();
        }
        else if (event.key === 'a') {
            this.tetris.actionLeft();
        }
        else if (event.key === 's') {
            this.tetris.actionDown();
        }
        else if (event.key === 'd') {
            this.tetris.actionRight();
        }
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

    gameExit(tetris) {
        this.tetris.actionStop();
        this.exitEvent.emit();
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
        this.points += 1;
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
