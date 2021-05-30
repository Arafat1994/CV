import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelBlogCardComponent } from './panel-blog-card.component';

describe('PanelBlogCardComponent', () => {
  let component: PanelBlogCardComponent;
  let fixture: ComponentFixture<PanelBlogCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelBlogCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelBlogCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
