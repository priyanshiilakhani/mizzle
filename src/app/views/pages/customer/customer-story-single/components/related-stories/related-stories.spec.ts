import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatedStories } from './related-stories';

describe('RelatedStories', () => {
  let component: RelatedStories;
  let fixture: ComponentFixture<RelatedStories>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RelatedStories]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelatedStories);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
