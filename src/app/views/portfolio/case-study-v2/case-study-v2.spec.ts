import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseStudyV2 } from './case-study-v2';

describe('CaseStudyV2', () => {
  let component: CaseStudyV2;
  let fixture: ComponentFixture<CaseStudyV2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaseStudyV2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaseStudyV2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
