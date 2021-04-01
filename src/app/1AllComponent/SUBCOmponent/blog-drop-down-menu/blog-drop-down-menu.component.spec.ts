import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogDropDownMenuComponent } from './blog-drop-down-menu.component';

describe('BlogDropDownMenuComponent', () => {
  let component: BlogDropDownMenuComponent;
  let fixture: ComponentFixture<BlogDropDownMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogDropDownMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogDropDownMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
