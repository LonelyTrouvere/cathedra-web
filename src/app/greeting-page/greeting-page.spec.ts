import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreetingPage } from './greeting-page';

describe('GreetingPage', () => {
  let component: GreetingPage;
  let fixture: ComponentFixture<GreetingPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GreetingPage],
    }).compileComponents();

    fixture = TestBed.createComponent(GreetingPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
