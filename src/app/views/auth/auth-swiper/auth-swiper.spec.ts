import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthSwiper } from './auth-swiper';

describe('AuthSwiper', () => {
  let component: AuthSwiper;
  let fixture: ComponentFixture<AuthSwiper>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthSwiper]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthSwiper);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
