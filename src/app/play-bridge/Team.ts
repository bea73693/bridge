import { Constants } from './Constants';

export class Team {
  private _totalScoreAbove: number;
  private _scoreAbove: number[];
  private _totalScoreBelow: number;
  private _scoreBelow: number[];
  private _gamesWon: number;
  private _vulnerable: boolean;
  private _vulnerableMultiplier: number;
  private _totalPoints: number;
  private _rubberScoresBelow: number[][] = [];

  constructor() {
      this._totalScoreAbove = 0;
      this._scoreAbove = [];
      this._totalScoreBelow = 0;
      this._scoreBelow = [];
      this._gamesWon = 0;
      this._vulnerable = false;
      this._vulnerableMultiplier = 1;
      this._totalPoints = 0;
  }

  resetScoreBelow() {
      this._scoreBelow = [];
      this._totalScoreBelow = 0;
  }

  addScoreAboveAndUpdateTotal(scoreAbove: number) {
      this._scoreAbove.push(scoreAbove);
      this._totalScoreAbove += scoreAbove;
      this._totalPoints += scoreAbove;
  }

  addScoreBelowAndUpdateTotal(scoreBelow: number, gameNumber: number) {
      this._scoreBelow.push(scoreBelow);
      this._totalScoreBelow += scoreBelow;
      this._totalPoints += scoreBelow;
      this._rubberScoresBelow[gameNumber-1] = this.scoreBelow;
      console.log("Score below for this team: " + this._rubberScoresBelow[1]);
  }

  addGameWin() {
      this._gamesWon += 1;
      this._vulnerable = true;
      this._vulnerableMultiplier = Constants.VULNERABLE_MULTIPLIER;
      this.resetScoreBelow();
  }
  get totalScoreAbove() {
      return this._totalScoreAbove;
  }

  get totalScoreBelow(): number {
      return this._totalScoreBelow;
  }

  get gamesWon(): number {
      return this._gamesWon;
  }

  get vulnerable(): boolean {
      return this._vulnerable;
  }

  get vulnerableMultiplier() {
      return this._vulnerableMultiplier;
  }

  get totalPoints() {
    return this._totalPoints;
  }
  
  get scoreAbove() {
    return this._scoreAbove;
  }

  get scoreBelow() {
      return this._scoreBelow;
  }
  
  get rubberScoresBelow() {
      return this._rubberScoresBelow;
  }
}