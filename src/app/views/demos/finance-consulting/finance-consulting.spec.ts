import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceConsulting } from './finance-consulting';

describe('FinanceConsulting', () => {
  let component: FinanceConsulting;
  let fixture: ComponentFixture<FinanceConsulting>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinanceConsulting]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinanceConsulting);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
