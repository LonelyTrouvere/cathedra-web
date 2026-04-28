import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualificationsPage } from './qualifications-page';

describe('QualificationsPage', () => {
  let component: QualificationsPage;
  let fixture: ComponentFixture<QualificationsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QualificationsPage],
    }).compileComponents();

    fixture = TestBed.createComponent(QualificationsPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
