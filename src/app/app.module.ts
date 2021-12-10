import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayBridgeComponent } from './components/play-bridge/play-bridge.component';
import { LeaderboardComponent } from './components/leaderboard/leaderboard.component';
import { ScoresheetComponent } from './components/play-bridge/scoresheet/scoresheet.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GameLineComponent } from './components/play-bridge/scoresheet/game-line/game-line.component';
import { BidHistoryComponent } from './components/play-bridge/bid-history/bid-history.component';
import { BridgeGameService } from './services/bridge-game.service';

@NgModule({
  declarations: [
    AppComponent,
    PlayBridgeComponent,
    LeaderboardComponent,
    ScoresheetComponent,
    GameLineComponent,
    BidHistoryComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [BridgeGameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
