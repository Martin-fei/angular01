import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Myc11Component } from './myc11.component';

describe('Myc11Component', () => {
  let component: Myc11Component;
  let fixture: ComponentFixture<Myc11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Myc11Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Myc11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
