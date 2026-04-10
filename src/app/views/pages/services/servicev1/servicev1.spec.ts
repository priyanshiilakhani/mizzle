import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Servicev1 } from './servicev1';

describe('Servicev1', () => {
  let component: Servicev1;
  let fixture: ComponentFixture<Servicev1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Servicev1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Servicev1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
