import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramsPage } from './programs-page';

describe('ProgramsPage', () => {
  let component: ProgramsPage;
  let fixture: ComponentFixture<ProgramsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgramsPage],
    }).compileComponents();

    fixture = TestBed.createComponent(ProgramsPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
