import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayBridgeComponent } from './play-bridge.component';

describe('PlayBridgeComponent', () => {
  let component: PlayBridgeComponent;
  let fixture: ComponentFixture<PlayBridgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayBridgeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayBridgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
