import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gestionaractividades } from './gestionaractividades';

describe('Gestionaractividades', () => {
  let component: Gestionaractividades;
  let fixture: ComponentFixture<Gestionaractividades>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Gestionaractividades],
    }).compileComponents();

    fixture = TestBed.createComponent(Gestionaractividades);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
