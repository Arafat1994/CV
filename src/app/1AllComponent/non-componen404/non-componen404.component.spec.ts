import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonComponen404Component } from './non-componen404.component';

describe('NonComponen404Component', () => {
  let component: NonComponen404Component;
  let fixture: ComponentFixture<NonComponen404Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NonComponen404Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NonComponen404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
