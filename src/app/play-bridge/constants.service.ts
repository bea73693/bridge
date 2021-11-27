import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantsService {
  readonly TEAM_TOKEN_WE: string = 'W';
  readonly TEAM_TOKEN_THEY: string = 'T';
  readonly NO_TRUMP: string = 'N';
  readonly CLUBS: string = 'C';
  readonly DIAMONDS: string = 'D';
  readonly HEARTS: string = 'H';
  readonly SPADES: string = 'S';
  readonly POINTS_MAJOR: number = 30;
  readonly POINTS_MINOR: number = 20;
  readonly POINTS_UNDER_TRICK: number = 50;
  readonly NO_TRUMP_BONUS: number = 10;
  readonly DOUBLED_MULTIPLIER: number = 2;
  readonly REDOUBLED_MULTIPLIER: number = 4;
  readonly VULNERABLE_MULTIPLIER: number = 2;
  readonly POINTS_FOR_GAME: number = 100;

  constructor() { }
}
