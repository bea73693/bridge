import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayBridgeComponent } from './play-bridge/play-bridge.component';
import { LeaderboardComponent } from './components/leaderboard/leaderboard.component';
import { ScoresheetComponent } from './play-bridge/scoresheet/scoresheet.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GameLineComponent } from './play-bridge/scoresheet/game-line/game-line.component';
import { CurrentBidComponent } from './play-bridge/current-bid/current-bid.component';
import { BidHistoryComponent } from './play-bridge/bid-history/bid-history.component';
import { BridgeGameService } from './play-bridge/bridge-game.service';

@NgModule({
  declarations: [
    AppComponent,
    PlayBridgeComponent,
    LeaderboardComponent,
    ScoresheetComponent,
    GameLineComponent,
    CurrentBidComponent,
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
