import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Features2 } from './features2';

describe('Features2', () => {
  let component: Features2;
  let fixture: ComponentFixture<Features2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Features2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Features2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
