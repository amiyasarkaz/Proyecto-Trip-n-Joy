import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Francia } from './francia';

describe('Francia', () => {
  let component: Francia;
  let fixture: ComponentFixture<Francia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Francia],
    }).compileComponents();

    fixture = TestBed.createComponent(Francia);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
