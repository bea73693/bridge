import { Component, OnInit } from '@angular/core';
import { BridgeGameService } from '../../bridge-game.service';
import { Bid } from '../../Bid';

@Component({
  selector: 'app-current-bid',
  templateUrl: './current-bid.component.html',
  styleUrls: ['./current-bid.component.css']
})
export class CurrentBidComponent implements OnInit {

  constructor(private bridgeGame: BridgeGameService) { }

  currentBid!: Bid;

  ngOnInit(): void {
    this.bridgeGame.currentBid.subscribe((currentBid: Bid) => this.currentBid = currentBid);
  }
}
