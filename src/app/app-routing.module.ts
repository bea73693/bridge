import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayBridgeComponent } from './play-bridge/play-bridge.component';
import { LeaderboardComponent } from './components/leaderboard/leaderboard.component';

const routes: Routes = [
  {path: 'play-bridge', component: PlayBridgeComponent},
  {path: 'leaderboard', component: LeaderboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
