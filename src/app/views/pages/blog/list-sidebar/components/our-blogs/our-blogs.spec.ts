import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurBlogs } from './our-blogs';

describe('OurBlogs', () => {
  let component: OurBlogs;
  let fixture: ComponentFixture<OurBlogs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurBlogs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurBlogs);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
