import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramPage } from './program-page';

describe('ProgramPage', () => {
  let component: ProgramPage;
  let fixture: ComponentFixture<ProgramPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgramPage],
    }).compileComponents();

    fixture = TestBed.createComponent(ProgramPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
