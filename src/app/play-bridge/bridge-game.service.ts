import { Injectable } from '@angular/core';
import { Bid } from './Bid';
import { BehaviorSubject } from 'rxjs';
import { Team } from './Team';
import { Constants } from './Constants';

@Injectable({
  providedIn: 'root'
})
export class BridgeGameService {

  currentBid = new Bid();
  private bidSource = new BehaviorSubject(this.currentBid);
  currentBidObservable = this.bidSource.asObservable();
  rubberOver: boolean = false;
  gameNumber: number = 1;
  
  teamWe = new Team();
  teamThey = new Team();
  winningTeam = new Team();

  private teamWeSource = new BehaviorSubject(this.teamWe);
  teamWeObservable = this.teamWeSource.asObservable();
  private teamTheySource = new BehaviorSubject(this.teamThey);
  teamTheyObservable = this.teamTheySource.asObservable();
  private gameNumberSource = new BehaviorSubject(this.gameNumber);
  gameNumberObservable = this.gameNumberSource.asObservable();

  constructor() { }

  setCurrentBid(newBid: Bid) {
    newBid.active = true;
    this.bidSource.next(newBid);
    this.currentBid = newBid;
  }

  endRound(tricksMade: number, honors?: { team: string, honorsPoints: number}) {
    this.currentBid.active = !this.currentBid.active;
    this.currentBid.tricksMade = tricksMade;
    
    
    let teamWithBid: Team;
    let teamWithDummy: Team;
    let contractTricks = this.currentBid.contractTricks;

    teamWithBid = this.teamWe;
    teamWithDummy = this.teamThey;
    if (this.currentBid.teamBidding === Constants.TEAM_TOKEN_THEY) {
      teamWithBid = this.teamThey;
      teamWithDummy = this.teamWe;
    }

    let pointsPerTrick = this.determinePointsPerTrick(this.currentBid.suit) * this.currentBid.doubleValue;
    let pointsPerOverTrick = this.currentBid.bidHasDoubledMultiplier? (Constants.DOUBLED_BID_TRICK_VALUE * this.currentBid.doubleValue) * teamWithBid.vulnerableMultiplier: pointsPerTrick;
    let basePointsPerUnderTrick = Constants.BASE_POINTS_UNDERTRICK * teamWithBid.vulnerableMultiplier * this.currentBid.doubleValue; // this will be 50 or 100 or 200 or 400
    let halfCurrentDoubleValue = this.currentBid.doubleValue/2;

    //add honors if present 
    if (honors) {
      let teamWithHonors = honors.team === Constants.TEAM_TOKEN_WE? this.teamWe: this.teamThey;
      teamWithHonors.addScoreAboveAndUpdateTotal(honors.honorsPoints);
    }

    //bidding team went under
    if (tricksMade < 0) {
      let undertricks = Math.abs(tricksMade);
      let pointsEarned = this.determineUndertrickPenaltyPoints(basePointsPerUnderTrick, undertricks, this.currentBid.bidHasDoubledMultiplier, teamWithBid.vulnerable);
      teamWithDummy.addScoreAboveAndUpdateTotal(pointsEarned);
      console.log("ADD SCORE ABOVE THE LINE DUMMY TEAM: " + pointsEarned);
    }
    //bidding team made the bid or made overtricks 
    else {
      //add insult bonus if bidding team made a doubled bid
      if (this.currentBid.bidHasDoubledMultiplier) {
        teamWithBid.addScoreAboveAndUpdateTotal(Constants.DOUBLED_BID_TRICK_VALUE * halfCurrentDoubleValue);
        console.log("ADD SCORE ABOVE THE LINE FOR INSULT: " + Constants.DOUBLED_BID_TRICK_VALUE * halfCurrentDoubleValue);
      }

      //add score below for successful bid 
      let pointsEarnedBelow = this.currentBid.suit === Constants.NO_TRUMP? (Constants.NO_TRUMP_FIRST_TRICK_BONUS * this.currentBid.doubleValue) + (pointsPerTrick * (contractTricks-1)): pointsPerTrick * contractTricks; 
      teamWithBid.addScoreBelowAndUpdateTotal(pointsEarnedBelow, this.gameNumber);
      console.log("ADD SCORE BELOW THE LINE: " + pointsEarnedBelow);

      //add small/grand slam bonus 
      if (this.currentBid.isSmallSlamBid){
        let smallSlamBonus = teamWithBid.vulnerable? Constants.BASE_SMALL_SLAM_BONUS * Constants.VULNERABLE_SLAM_BONUS_MULTIPLIER: Constants.BASE_SMALL_SLAM_BONUS;
        teamWithBid.addScoreAboveAndUpdateTotal(smallSlamBonus);
        console.log("SMALL SLAM BONUS: " + smallSlamBonus);
      }
      else if (this.currentBid.isGrandSlamBid){
        let grandSlamBonus = teamWithBid.vulnerable? Constants.BASE_GRAND_SLAM_BONUS * Constants.VULNERABLE_SLAM_BONUS_MULTIPLIER: Constants.BASE_GRAND_SLAM_BONUS;
        teamWithBid.addScoreAboveAndUpdateTotal(grandSlamBonus);
        console.log("GRAND SLAM BONUS: " + grandSlamBonus);
      }

      //bidding team made over tricks
      if (tricksMade > 0) {
        teamWithBid.addScoreAboveAndUpdateTotal(pointsPerOverTrick * tricksMade);
        console.log("ADD SCORE ABOVE THE LINE: " + pointsPerOverTrick * tricksMade);
      }

      //check if the bid won the bidding team a game, check if the rubber is over
      if (teamWithBid.totalScoreBelow >= Constants.POINTS_FOR_GAME) {
        teamWithBid.addGameWin();
        this.gameNumber++;
        console.log("GAME NUMBER: " + this.gameNumber);
      }
      this.checkGameOver();
      this.updateSubscriptions();
    }
  }

  private determineUndertrickPenaltyPoints (basePointsPerUnderTrick: number, undertricks: number, bidHasDoubledMultiplier: boolean, biddingTeamVulnerable: boolean){
    if (bidHasDoubledMultiplier) {
      let totalPointsEarned = 0;
      if (biddingTeamVulnerable) {
        for (let i = 0; i < undertricks; i++) {
          totalPointsEarned = i >= Constants.PENALTY_LEVEL_TWO_SET_INDEX? totalPointsEarned + (Constants.MAX_UNDERTRICK_BASE_PENTALTY * (this.currentBid.doubleValue/2)): totalPointsEarned + basePointsPerUnderTrick;
        }
      }
      else {
        let penaltyLevel = 1;
        for (let i = 0; i < undertricks; i++) {
          penaltyLevel = i == Constants.PENALTY_LEVEL_TWO_SET_INDEX? Constants.PENALTY_LEVEL_TWO_MULTIPLIER: i == Constants.PENALTY_LEVEL_TRHEE_SET_INDEX? Constants.PENALTY_LEVEL_TRHEE_MULTIPLIER: penaltyLevel;
          totalPointsEarned += basePointsPerUnderTrick * penaltyLevel;
        }
      }
      return totalPointsEarned
    }
    return basePointsPerUnderTrick * undertricks;
  }

  private updateSubscriptions() {
    this.bidSource.next(this.currentBid);
    this.gameNumberSource.next(this.gameNumber);
    this.teamWeSource.next(this.teamWe);
    this.teamTheySource.next(this.teamThey);
  }

  private determinePointsPerTrick(suit: string) {
    if (suit === Constants.CLUBS || suit === Constants.DIAMONDS){
      return Constants.POINTS_MINOR;
    }
    else {
      return Constants.POINTS_MAJOR;
    }
  }

  private checkGameOver() {
    if (this.teamWe.gamesWon > 1 || this.teamThey.gamesWon > 1) {
        this.rubberOver = true;
        this.findGameWinner();
    }
  }

  private findGameWinner() {
    if (this.teamWe.totalPoints > this.teamThey.totalPoints) {
      this.winningTeam = this.teamWe;
    }
    else {
      this.winningTeam = this.teamThey;
    }
  }
}
