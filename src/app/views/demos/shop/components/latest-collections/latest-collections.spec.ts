import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestCollections } from './latest-collections';

describe('LatestCollections', () => {
  let component: LatestCollections;
  let fixture: ComponentFixture<LatestCollections>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LatestCollections]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LatestCollections);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
