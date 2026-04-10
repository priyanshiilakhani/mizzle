import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Servicev2 } from './servicev2';

describe('Servicev2', () => {
  let component: Servicev2;
  let fixture: ComponentFixture<Servicev2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Servicev2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Servicev2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
