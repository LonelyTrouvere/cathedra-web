import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LecturerCard } from './lecturer-card';

describe('LecturerCard', () => {
  let component: LecturerCard;
  let fixture: ComponentFixture<LecturerCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LecturerCard],
    }).compileComponents();

    fixture = TestBed.createComponent(LecturerCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
