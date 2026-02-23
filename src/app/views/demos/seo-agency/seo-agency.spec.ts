import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeoAgency } from './seo-agency';

describe('SeoAgency', () => {
  let component: SeoAgency;
  let fixture: ComponentFixture<SeoAgency>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeoAgency]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeoAgency);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
