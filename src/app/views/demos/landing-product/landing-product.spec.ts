import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingProduct } from './landing-product';

describe('LandingProduct', () => {
  let component: LandingProduct;
  let fixture: ComponentFixture<LandingProduct>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingProduct]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingProduct);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
