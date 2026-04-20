import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CaseStudyV1 } from './case-study-v1';

describe('CaseStudyV1', () => {
  let component: CaseStudyV1;
  let fixture: ComponentFixture<CaseStudyV1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaseStudyV1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaseStudyV1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
