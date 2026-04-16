import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Oslo } from './oslo';

describe('Oslo', () => {
  let component: Oslo;
  let fixture: ComponentFixture<Oslo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Oslo],
    }).compileComponents();

    fixture = TestBed.createComponent(Oslo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
