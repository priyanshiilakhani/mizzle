import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Relatetd } from './relatetd';

describe('Relatetd', () => {
  let component: Relatetd;
  let fixture: ComponentFixture<Relatetd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Relatetd]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Relatetd);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
