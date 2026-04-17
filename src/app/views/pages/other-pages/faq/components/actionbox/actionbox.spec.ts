import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Actionbox } from './actionbox';

describe('Actionbox', () => {
  let component: Actionbox;
  let fixture: ComponentFixture<Actionbox>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Actionbox]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Actionbox);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
