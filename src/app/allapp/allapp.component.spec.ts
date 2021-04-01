import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ALLAPPComponent } from './allapp.component';

describe('ALLAPPComponent', () => {
  let component: ALLAPPComponent;
  let fixture: ComponentFixture<ALLAPPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ALLAPPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ALLAPPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
