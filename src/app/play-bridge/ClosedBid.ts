import { Bid } from './Bid';

export class ClosedBid extends Bid {

  constructor(bid: Bid, teamWithBid: string, tricksMade: number, scoreDescriptions: string[]) {
    super(bid.teamBidding, bid.contractTricks, bid.suit, bid.doubleValue);
    
  }
}