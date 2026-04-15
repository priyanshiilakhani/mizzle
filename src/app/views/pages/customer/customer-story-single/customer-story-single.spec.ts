import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerStorySingle } from './customer-story-single';

describe('CustomerStorySingle', () => {
  let component: CustomerStorySingle;
  let fixture: ComponentFixture<CustomerStorySingle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerStorySingle]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerStorySingle);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
