import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleOpenionComponent } from './people-openion.component';

describe('PeopleOpenionComponent', () => {
  let component: PeopleOpenionComponent;
  let fixture: ComponentFixture<PeopleOpenionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeopleOpenionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleOpenionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
