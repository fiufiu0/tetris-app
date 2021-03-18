import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { IntroComponent } from './intro/intro.component';
import { TetrisCoreModule } from 'ngx-tetris';
import { IntroFormComponent } from './intro/intro-form/intro-form.component';
import { GameInfoComponent } from './game/game-info/game-info.component';
import { GameControlComponent } from './game/game-control/game-control.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    GameComponent,
    IntroFormComponent,
    GameInfoComponent,
    GameControlComponent
  ],
  imports: [
    BrowserModule,
    TetrisCoreModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }