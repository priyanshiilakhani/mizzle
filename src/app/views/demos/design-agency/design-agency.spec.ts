import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignAgency } from './design-agency';

describe('DesignAgency', () => {
  let component: DesignAgency;
  let fixture: ComponentFixture<DesignAgency>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesignAgency]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesignAgency);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
