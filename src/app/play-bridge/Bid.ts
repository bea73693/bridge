import { Constants } from './Constants';

export class Bid {
  private _tricksMade: number;
  private _active: boolean; 
  private _bidHasDoubledMultiplier: boolean;
  private _isSmallSlamBid: boolean;
  private _isGrandSlamBid: boolean;  

  constructor(private _teamBidding: string = 'default', private _contractTricks: number = -1, private _suit: string = 'default', private _doubleValue: number = -1){
    this._tricksMade = -1;
    this._active = false;
    this._bidHasDoubledMultiplier = _doubleValue > 1;
    this._isSmallSlamBid = _contractTricks == 6;
    this._isGrandSlamBid = _contractTricks == 7;
  }

  get teamBidding() {
    return this._teamBidding;
  }

  get contractTricks() {
    return this._contractTricks;
  }

  get suit() {
    return this._suit;
  }

  get doubleValue() {
    return this._doubleValue;
  }

  get tricksMade() {
    return this._tricksMade;
  }

  get active() {
    return this._active;
  }

  get bidHasDoubledMultiplier() {
    return this._bidHasDoubledMultiplier;
  }

  get isSmallSlamBid() {
    return this._isSmallSlamBid;
  }

  get isGrandSlamBid() {
    return this._isGrandSlamBid;
  }

  set tricksMade(tricksMade: number) {
    this._tricksMade = tricksMade;
  }

  set active(isActive) {
    this._active = isActive;
  }
}