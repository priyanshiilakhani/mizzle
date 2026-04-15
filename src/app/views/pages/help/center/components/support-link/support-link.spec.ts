import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportLink } from './support-link';

describe('SupportLink', () => {
  let component: SupportLink;
  let fixture: ComponentFixture<SupportLink>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SupportLink]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupportLink);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
