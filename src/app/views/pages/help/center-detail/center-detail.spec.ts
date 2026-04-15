import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CenterDetail } from './center-detail';

describe('CenterDetail', () => {
  let component: CenterDetail;
  let fixture: ComponentFixture<CenterDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CenterDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CenterDetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
