import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { IntroComponent } from './intro/intro.component';
import { TetrisCoreModule } from 'ngx-tetris';
import { IntroFormComponent } from './intro/intro-form/intro-form.component';
import { GameInfoComponent } from './game/game-info/game-info.component';
import { GameControlComponent } from './game/game-control/game-control.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HighscoresComponent } from './game/highscores/highscores.component';
import { SortScorePipe } from './game/sort-score.pipe';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    GameComponent,
    IntroFormComponent,
    GameInfoComponent,
    GameControlComponent,
    HighscoresComponent,
    SortScorePipe
  ],
  imports: [
    BrowserModule,
    TetrisCoreModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: 'intro', component: IntroComponent },
      { path: 'game', component: GameComponent },
      { path: 'game/:color', component: GameComponent },
      { path: '**', redirectTo: 'intro' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }