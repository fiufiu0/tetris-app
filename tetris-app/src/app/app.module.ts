import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { IntroComponent } from './intro/intro.component';
import { TetrisCoreModule } from 'ngx-tetris';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    GameComponent
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
