import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Planear } from './planear';

describe('Planear', () => {
  let component: Planear;
  let fixture: ComponentFixture<Planear>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Planear],
    }).compileComponents();

    fixture = TestBed.createComponent(Planear);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
