import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutDropDownMEnuComponent } from './about-drop-down-menu.component';

describe('AboutDropDownMEnuComponent', () => {
  let component: AboutDropDownMEnuComponent;
  let fixture: ComponentFixture<AboutDropDownMEnuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutDropDownMEnuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutDropDownMEnuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
