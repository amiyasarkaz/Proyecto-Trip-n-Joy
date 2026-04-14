import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Especificaciones1 } from './especificaciones1';

describe('Especificaciones1', () => {
  let component: Especificaciones1;
  let fixture: ComponentFixture<Especificaciones1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Especificaciones1],
    }).compileComponents();

    fixture = TestBed.createComponent(Especificaciones1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
