import { Component, Input, OnInit } from '@angular/core';
import { BridgeGameService } from '../../bridge-game.service';
import { Team } from '../../Team';

@Component({
  selector: 'app-game-line',
  templateUrl: './game-line.component.html',
  styleUrls: ['../scoresheet.component.css']
})
export class GameLineComponent implements OnInit {

  teamWe = new Team();
  teamThey = new Team();

  @Input()
  gameNumber!: number;

  constructor(private bridgeGame: BridgeGameService) { }

  ngOnInit(): void {
    console.log("GAME NUMBER FROM INPUT: " + this.gameNumber);
    this.bridgeGame.teamWeObservable.subscribe((teamWe: Team) => this.teamWe = teamWe);
    this.bridgeGame.teamTheyObservable.subscribe((teamThey: Team) => this.teamThey = teamThey);
  }
}
