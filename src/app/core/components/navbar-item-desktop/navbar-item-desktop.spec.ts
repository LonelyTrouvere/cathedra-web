import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarItemDesktop } from './navbar-item-desktop';

describe('NavbarItemDesktop', () => {
  let component: NavbarItemDesktop;
  let fixture: ComponentFixture<NavbarItemDesktop>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarItemDesktop],
    }).compileComponents();

    fixture = TestBed.createComponent(NavbarItemDesktop);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
