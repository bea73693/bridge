export class Bid {
    _teamBidding: string;
    _contractTricks: number;
    _suit: string;
    _doubleValue: number;
    _tricksMade?: number;

    constructor(teamBidding: string, contractTricks: number, suit: string, doubleValue: number, tricksMade?: number){
        this._teamBidding = teamBidding;
        this._contractTricks = contractTricks;
        this._suit = suit;
        this._doubleValue = doubleValue;
        this._tricksMade = tricksMade;
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
}