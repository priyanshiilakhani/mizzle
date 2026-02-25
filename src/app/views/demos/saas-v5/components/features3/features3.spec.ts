import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Features3 } from './features3';

describe('Features3', () => {
  let component: Features3;
  let fixture: ComponentFixture<Features3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Features3]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Features3);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
