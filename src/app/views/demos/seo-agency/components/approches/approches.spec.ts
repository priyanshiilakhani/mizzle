import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Approches } from './approches';

describe('Approches', () => {
  let component: Approches;
  let fixture: ComponentFixture<Approches>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Approches]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Approches);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
