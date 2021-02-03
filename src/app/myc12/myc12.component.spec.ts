import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Myc12Component } from './myc12.component';

describe('Myc12Component', () => {
  let component: Myc12Component;
  let fixture: ComponentFixture<Myc12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Myc12Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Myc12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
