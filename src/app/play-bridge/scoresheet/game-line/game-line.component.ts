import { Component, Input, OnInit } from '@angular/core';
import { BridgeGameService } from '../../bridge-game.service';
import { Team } from '../../bridge-helper-classes/Team';

@Component({
  selector: 'app-game-line',
  templateUrl: './game-line.component.html',
  styleUrls: ['../scoresheet.component.css']
})
export class GameLineComponent implements OnInit {

  teamWe = new Team();
  teamThey = new Team();

  @Input()
  game!: number;

  @Input()
  activeGameIndex!: number;

  @Input()
  rubberOver!: boolean;

  constructor(private bridgeGame: BridgeGameService) { }

  ngOnInit(): void {
    this.bridgeGame.teamWeObservable.subscribe((teamWe: Team) => this.teamWe = teamWe);
    this.bridgeGame.teamTheyObservable.subscribe((teamThey: Team) => this.teamThey = teamThey);
  }
}
