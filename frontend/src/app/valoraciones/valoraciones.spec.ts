import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Valoraciones1 } from './valoraciones1';

describe('Valoraciones', () => {
  let component: Valoraciones1;
  let fixture: ComponentFixture<Valoraciones1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Valoraciones1],
    }).compileComponents();

    fixture = TestBed.createComponent(Valoraciones1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
