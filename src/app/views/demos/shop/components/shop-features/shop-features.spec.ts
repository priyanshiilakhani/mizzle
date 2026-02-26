import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopFeatures } from './shop-features';

describe('ShopFeatures', () => {
  let component: ShopFeatures;
  let fixture: ComponentFixture<ShopFeatures>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShopFeatures]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopFeatures);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
