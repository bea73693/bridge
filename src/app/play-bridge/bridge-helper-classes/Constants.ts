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
  static readonly MAX_UNDERTRICK_BASE_PENTALTY: number = 300;
  
  static readonly PENALTY_LEVEL_TWO_SET_INDEX: number = 1;
  static readonly PENALTY_LEVEL_TWO_MULTIPLIER: number = 2;
  static readonly PENALTY_LEVEL_TRHEE_SET_INDEX: number = 3;
  static readonly PENALTY_LEVEL_TRHEE_MULTIPLIER: number = 3;

  static readonly BASE_SMALL_SLAM_BONUS: number = 500;
  static readonly SMALL_SLAM_BID_TRICKS: number = 6;
  static readonly GRAND_SLAM_BID_TRICKS: number = 7;
  static readonly BASE_GRAND_SLAM_BONUS: number = 1000;

  static readonly SMALL_HONORS_BONUS: number = 100;
  static readonly LARGE_HONORS_BONUS: number = 150;

  static readonly SLOW_RUBBER_BONUS: number = 500;
  static readonly FAST_RUBBER_BONUS: number = 700;
  static readonly GAMES_NEEDED_TO_WIN_RUBBER: number = 2;


  constructor() { }
}
