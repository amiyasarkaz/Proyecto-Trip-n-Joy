import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionMedica } from './informacion-medica';

describe('InformacionMedica', () => {
  let component: InformacionMedica;
  let fixture: ComponentFixture<InformacionMedica>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InformacionMedica],
    }).compileComponents();

    fixture = TestBed.createComponent(InformacionMedica);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
