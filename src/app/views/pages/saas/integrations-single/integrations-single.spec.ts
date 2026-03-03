import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegrationsSingle } from './integrations-single';

describe('IntegrationsSingle', () => {
  let component: IntegrationsSingle;
  let fixture: ComponentFixture<IntegrationsSingle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntegrationsSingle]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntegrationsSingle);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
