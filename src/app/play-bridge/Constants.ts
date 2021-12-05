export class Constants {
  static readonly TEAM_TOKEN_WE: string = 'We';
  static readonly TEAM_TOKEN_THEY: string = 'They';
  static readonly NO_TRUMP: string = 'NT';
  static readonly CLUBS: string = 'clubs';
  static readonly DIAMONDS: string = 'diamonds';
  static readonly HEARTS: string = 'hearts';
  static readonly SPADES: string = 'spades';
  static readonly POINTS_MAJOR: number = 30;
  static readonly POINTS_MINOR: number = 20;
  static readonly NO_TRUMP_FIRST_TRICK_BONUS: number = 40; 
  static readonly DOUBLED_MULTIPLIER: number = 2;
  static readonly REDOUBLED_MULTIPLIER: number = 4;
  static readonly VULNERABLE_MULTIPLIER: number = 2;
  static readonly VULNERABLE_SLAM_BONUS_MULTIPLIER: number = 1.5;

  static readonly DOUBLED_BID_TRICK_VALUE: number = 50;
  static readonly BASE_POINTS_UNDERTRICK: number = 50;


  static readonly POINTS_FOR_GAME: number = 100;
  static readonly MAX_UNDERTRICK_BASE_PENTALTY = 300;
  
  static readonly PENALTY_LEVEL_TWO_SET_INDEX = 1;
  static readonly PENALTY_LEVEL_TWO_MULTIPLIER = 2;
  static readonly PENALTY_LEVEL_TRHEE_SET_INDEX = 3;
  static readonly PENALTY_LEVEL_TRHEE_MULTIPLIER = 3;

  static readonly BASE_SMALL_SLAM_BONUS = 500;
  static readonly BASE_GRAND_SLAM_BONUS = 1000;

  static readonly SMALL_HONORS_BONUS = 100;
  static readonly LARGE_HONORS_BONUS = 150;

  static readonly SLOW_RUBBER_BONUS = 500;
  static readonly FAST_RUBBER_BONUS = 700;


  constructor() { }
}
