import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtraBlogBlogFormComponent } from './extra-blog-blog-form.component';

describe('ExtraBlogBlogFormComponent', () => {
  let component: ExtraBlogBlogFormComponent;
  let fixture: ComponentFixture<ExtraBlogBlogFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtraBlogBlogFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtraBlogBlogFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
