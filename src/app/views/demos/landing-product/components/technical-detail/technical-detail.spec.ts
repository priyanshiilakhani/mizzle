import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicalDetail } from './technical-detail';

describe('TechnicalDetail', () => {
  let component: TechnicalDetail;
  let fixture: ComponentFixture<TechnicalDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechnicalDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechnicalDetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
