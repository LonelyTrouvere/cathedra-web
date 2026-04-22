import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CathedraHistoryPage } from './cathedra-history-page';

describe('CathedraHistoryPage', () => {
  let component: CathedraHistoryPage;
  let fixture: ComponentFixture<CathedraHistoryPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CathedraHistoryPage],
    }).compileComponents();

    fixture = TestBed.createComponent(CathedraHistoryPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
