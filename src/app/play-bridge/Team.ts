import { Constants } from './Constants';

export class Team {
  private _totalScoreAbove: number = 0;
  private _scoreAbove: number[] = [];
  private _totalScoreBelow: number = 0;
  private _scoreBelow: number[] = [];
  private _gamesWon: number = 0;
  private _vulnerable: boolean = false;
  private _vulnerableMultiplier: number = 1;
  private _totalPoints: number = 0;
  private _rubberScoresBelow: number[][] = [];
  private _teamName: string;
  private _isRubberWinner: boolean = false;

  constructor(teamName: string = '') {
    this._teamName = teamName;
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
  }

  addGameWin() {
    this._gamesWon += 1;
    this._isRubberWinner = this._gamesWon === Constants.GAMES_NEEDED_TO_WIN_RUBBER;
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

  get teamName() {
    return this._teamName;
  }

  get isRubberWinner() {
    return this._isRubberWinner;
  }
}