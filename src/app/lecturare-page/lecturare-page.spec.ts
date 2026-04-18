import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LecturarePage } from './lecturare-page';

describe('LecturarePage', () => {
  let component: LecturarePage;
  let fixture: ComponentFixture<LecturarePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LecturarePage],
    }).compileComponents();

    fixture = TestBed.createComponent(LecturarePage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
