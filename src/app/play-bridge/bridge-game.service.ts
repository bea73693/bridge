import { Injectable } from '@angular/core';
import { Bid } from './Bid';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BridgeGameService {

  private bidSource = new BehaviorSubject(new Bid('', 0, '', 0));
  currentBid = this.bidSource.asObservable();

  constructor() { }

  changeCurrentBid(newBid: Bid) {
    this.bidSource.next(newBid);
  }
}
