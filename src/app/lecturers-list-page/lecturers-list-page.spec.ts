import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LecturersListPage } from './lecturers-list-page';

describe('LecturersListPage', () => {
  let component: LecturersListPage;
  let fixture: ComponentFixture<LecturersListPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LecturersListPage],
    }).compileComponents();

    fixture = TestBed.createComponent(LecturersListPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
