import { TestBed } from '@angular/core/testing';

import { BridgeGameService } from './bridge-game.service';

describe('BridgeGameService', () => {
  let service: BridgeGameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BridgeGameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
