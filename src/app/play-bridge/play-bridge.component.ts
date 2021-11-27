import { Component, OnInit } from '@angular/core';
import { ConstantsService } from './constants.service';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { BridgeGameService } from './bridge-game.service';
import { Bid } from './Bid';


@Component({
  selector: 'app-play-bridge',
  templateUrl: './play-bridge.component.html',
  styleUrls: ['./play-bridge.component.css']
})
export class PlayBridgeComponent implements OnInit {
  possibleContractTricks = 7;

  teams = [
    { id: this.constants.TEAM_TOKEN_WE, value: 'We' },
    { id: this.constants.TEAM_TOKEN_THEY, value: 'They' }
  ];

  suits = [
    { id: this.constants.CLUBS, value: 'Clubs' },
    { id: this.constants.DIAMONDS, value: 'Diamonds' },
    { id: this.constants.HEARTS, value: 'Hearts' },
    { id: this.constants.SPADES, value: 'Spades' },
    { id: this.constants.NO_TRUMP, value: 'No Trump' }
  ];

  doubleValue = [
    { id: 1, value: 'Not Doubled'},
    { id: this.constants.DOUBLED_MULTIPLIER, value: 'Doubled' },
    { id: this.constants.REDOUBLED_MULTIPLIER, value: 'Redoubled'}
  ];

  makeBidForm = this.formBuilder.group({
    teamBidding: new FormControl(null, Validators.required),
    contractTricks: new FormControl(null, Validators.required),
    suit: new FormControl(null, Validators.required),
    doubleValue: new FormControl(this.doubleValue[0].id, Validators.required)
  });

  currentBid!: Bid;

  constructor(
    private constants: ConstantsService,
    private bridgeGame: BridgeGameService,
    private formBuilder: FormBuilder
    ) {}

  ngOnInit(): void {
    this.bridgeGame.currentBid.subscribe((currentBid: Bid) => this.currentBid = currentBid);
  }

  makeBid() {
    console.log("New Bid");
    console.log("Current bid: " + JSON.stringify(this.makeBidForm.value));
    let bid = this.makeBidForm.value;
    this.bridgeGame.changeCurrentBid(new Bid(bid.teamBidding, bid.contractTricks, bid.suit, bid.doubleValue));
  }

}
