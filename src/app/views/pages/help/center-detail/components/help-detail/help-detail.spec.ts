import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpDetail } from './help-detail';

describe('HelpDetail', () => {
  let component: HelpDetail;
  let fixture: ComponentFixture<HelpDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HelpDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelpDetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
