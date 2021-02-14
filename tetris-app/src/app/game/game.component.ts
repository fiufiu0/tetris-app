import { Component, OnInit, Input, Output, ViewChild, EventEmitter, HostListener } from '@angular/core';
import { TetrisCoreComponent } from 'ngx-tetris';

@Component({
    selector: 'app-game',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

    points = 0;
    status = "Game ready! Press to start!";
    @ViewChild('game') tetris: TetrisCoreComponent;
    @Output() exitEvent = new EventEmitter();
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
        else if (event.key === ' ') {
            this.gameStart();
        }
    }

    gameStart() {
        if (this.tetris.state === 1) {
            this.tetris.actionStop();
            this.status = 'Game paused!';
        }
        else {
            this.tetris.actionStart();
            this.status = 'Game started!';
        }
    }

    gameExit() {
        this.tetris.actionStop();
        this.exitEvent.emit();
    }

    countPoints() {
        this.points += 1;
    }

    lineCleared() {
        this.countPoints();
    }

    gameOver() {
        this.status = "Game over! Try again!"
    }

}
