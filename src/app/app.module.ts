import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayBridgeComponent } from './play-bridge/play-bridge.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { ScoresheetComponent } from './play-bridge/scoresheet/scoresheet.component';
import { BidComponent } from './play-bridge/bid/bid.component';
import { ConstantsService } from './play-bridge/constants.service';

@NgModule({
  declarations: [
    AppComponent,
    PlayBridgeComponent,
    LeaderboardComponent,
    ScoresheetComponent,
    BidComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ConstantsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
