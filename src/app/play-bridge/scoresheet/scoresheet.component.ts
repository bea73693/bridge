import { Component, OnInit } from '@angular/core';
import { BridgeGameService } from '../bridge-game.service';
import { Team } from '../bridge-helper-classes/Team';

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
  rubberOver: boolean = false;

  ngOnInit(): void {
    this.bridgeGame.gameNumberObservable.subscribe((gameNumber: number) => this.gameNumber = gameNumber);
    this.bridgeGame.teamWeObservable.subscribe((teamWe: Team) => this.teamWe = teamWe);
    this.bridgeGame.teamTheyObservable.subscribe((teamThey: Team) => this.teamThey = teamThey);
    this.bridgeGame.rubberOverObservable.subscribe((rubberOver: boolean) => this.rubberOver = rubberOver);
  }
}
