import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Stories2 } from './stories2';

describe('Stories2', () => {
  let component: Stories2;
  let fixture: ComponentFixture<Stories2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Stories2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Stories2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
