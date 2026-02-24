import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileShowCase } from './mobile-show-case';

describe('MobileShowCase', () => {
  let component: MobileShowCase;
  let fixture: ComponentFixture<MobileShowCase>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobileShowCase]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileShowCase);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
