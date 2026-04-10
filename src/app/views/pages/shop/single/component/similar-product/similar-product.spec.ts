import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimilarProduct } from './similar-product';

describe('SimilarProduct', () => {
  let component: SimilarProduct;
  let fixture: ComponentFixture<SimilarProduct>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimilarProduct]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimilarProduct);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
