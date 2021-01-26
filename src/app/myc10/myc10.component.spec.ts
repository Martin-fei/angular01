import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Myc10Component } from './myc10.component';

describe('Myc10Component', () => {
  let component: Myc10Component;
  let fixture: ComponentFixture<Myc10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Myc10Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Myc10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
