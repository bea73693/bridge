import { Component, OnInit } from '@angular/core';
import { BridgeGameService } from '../bridge-game.service';
import { Team } from '../Team';

@Component({
  selector: 'app-scoresheet',
  templateUrl: './scoresheet.component.html',
  styleUrls: ['./scoresheet.component.css']
})
export class ScoresheetComponent implements OnInit {

  constructor(
    private bridgeGame: BridgeGameService,
    ) { }

  teamWe = new Team();
  teamThey = new Team();
  gameNumber: number = 1;


  ngOnInit(): void {
    this.bridgeGame.gameNumberObservable.subscribe((gameNumber: number) => this.gameNumber = gameNumber);
    this.bridgeGame.teamWeObservable.subscribe((teamWe: Team) => this.teamWe = teamWe);
    this.bridgeGame.teamTheyObservable.subscribe((teamThey: Team) => this.teamThey = teamThey);
  }

  // recordTeamWeScore(teamWe: Team) {
  //   this.teamWe = teamWe;
  //   this.weScoresBelow[this.gameNumber-1] = teamWe.scoreBelow;
  // }

  // recordTeamTheyScore(teamThey: Team) {
  //   this.teamThey = teamThey;
  //   this.theyScoresBelow[this.gameNumber-1] = teamThey.scoreBelow;
  // }

  // getCurrentWeScores(gameIndex: number) {
  //   console.log("GAME NUMBER: "+ this.gameNumber + " TEAM WE SCORES: " + this.weScoresBelow[gameIndex]);
  //   return this.weScoresBelow[gameIndex];
  // }

  // getCurrentTheyScores(gameIndex: number) {
  //   console.log("GAME NUMBER: "+ this.gameNumber + " TEAM THEY SCORES: " + this.theyScoresBelow[gameIndex]);
  //   let returnArray = this.theyScoresBelow[gameIndex];
  //   return returnArray;
  // }
}
