import { Component, OnInit } from '@angular/core';
import { Constants } from './bridge-helper-classes/Constants';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BridgeGameService } from '../../services/bridge-game.service';
import { Bid } from './bridge-helper-classes/Bid';


@Component({
  selector: 'app-play-bridge',
  templateUrl: './play-bridge.component.html',
  styleUrls: ['./play-bridge.component.css']
})
export class PlayBridgeComponent implements OnInit {

  teams = [
    { id: Constants.TEAM_TOKEN_WE, value: 'We' },
    { id: Constants.TEAM_TOKEN_THEY, value: 'They' }
  ];

  suits = [
    { id: Constants.CLUBS, value: 'Clubs' },
    { id: Constants.DIAMONDS, value: 'Diamonds' },
    { id: Constants.HEARTS, value: 'Hearts' },
    { id: Constants.SPADES, value: 'Spades' },
    { id: Constants.NO_TRUMP, value: 'No Trump' }
  ];

  doubleValue = [
    { id: 1, value: 'Not Doubled'},
    { id: Constants.DOUBLED_MULTIPLIER, value: 'Doubled' },
    { id: Constants.REDOUBLED_MULTIPLIER, value: 'Redoubled'}
  ];

  tricksMade = [
    { id: -8, value: '-8' }, 
    { id: -7, value: '-7' },
    { id: -6, value: '-6' },
    { id: -5, value: '-5' },
    { id: -4, value: '-4' },
    { id: -3, value: '-3' },
    { id: -2, value: '-2' },
    { id: -1, value: '-1' },
    { id: 0, value: 'Even' },
    { id: 1, value: '+1' },
    { id: 2, value: '+2' },
    { id: 3, value: '+3' },
    { id: 4, value: '+4' },
    { id: 5, value: '+5' },
    { id: 6, value: '+6' }
  ];

  honors = [
    { id: Constants.SMALL_HONORS_BONUS, value: '100 Honors' },
    { id: Constants.LARGE_HONORS_BONUS, value: '150 Honors'}
  ];
  
  submitBidForm = new FormGroup({
    teamBidding: new FormControl(null, Validators.required),
    contractTricks: new FormControl(null, Validators.required),
    suit: new FormControl(null, Validators.required),
    doubleValue: new FormControl(this.doubleValue[0].id, Validators.required)
  });

  initialBidValues = this.submitBidForm.value;

  finishRoundForm = new FormGroup({
    tricksMade: new FormControl(0, Validators.required),
  });

  honorsForm = new FormGroup({
    team: new FormControl(null, Validators.required),
    honorsPoints: new FormControl(null, Validators.required)
  });
  initialHonorsFormValues = this.honorsForm.value;

  initialFinishRoundValues = this.finishRoundForm.value;

  currentBid: Bid = new Bid();
  possibleContractTricks: number[] = [1, 2, 3, 4, 5, 6, 7];
  showSuitImage: boolean = false;
  showDoubleValue: string = '';
  showAddHonors: boolean = false;
  rubberOver: boolean = false;
  
  constructor(
    private bridgeGame: BridgeGameService
    ) {}

  ngOnInit(): void {
    this.bridgeGame.currentBidObservable.subscribe((currentBid: Bid) => this.currentBid = currentBid);
    this.bridgeGame.rubberOverObservable.subscribe((rubberOver: boolean) => this.rubberOver = rubberOver);
  }

  makeBid() {
    let newBid = this.submitBidForm.value;
    newBid = new Bid(newBid.teamBidding, newBid.contractTricks, newBid.suit, newBid.doubleValue);
    this.showSuitImage = (newBid.suit != Constants.NO_TRUMP);
    this.showDoubleValue = newBid.doubleValue == Constants.DOUBLED_MULTIPLIER? 'X' : newBid.doubleValue == Constants.REDOUBLED_MULTIPLIER? 'XX' : '';
    this.bridgeGame.setCurrentBid(newBid);
    this.submitBidForm.reset(this.initialBidValues);
    this.submitBidForm.disable();
  }

  cancelHonors() {
    this.showAddHonors = false;
    this.honorsForm.reset(this.initialHonorsFormValues);
  }

  endRound() {
    this.submitBidForm.enable();
    let tricksMade = this.finishRoundForm.value.tricksMade;
    this.honorsForm.touched? this.bridgeGame.endRound(tricksMade, this.honorsForm.value): this.bridgeGame.endRound(this.finishRoundForm.value.tricksMade);
    this.finishRoundForm.reset(this.initialFinishRoundValues);
    this.cancelHonors();
  }

  resetRubber() {
    this.bridgeGame.resetRubber();
  }
}
