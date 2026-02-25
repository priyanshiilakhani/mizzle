import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Features1 } from './features1';

describe('Features1', () => {
  let component: Features1;
  let fixture: ComponentFixture<Features1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Features1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Features1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
