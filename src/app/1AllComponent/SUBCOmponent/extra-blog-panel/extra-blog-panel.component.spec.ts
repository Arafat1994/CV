import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtraBlogPanelComponent } from './extra-blog-panel.component';

describe('ExtraBlogPanelComponent', () => {
  let component: ExtraBlogPanelComponent;
  let fixture: ComponentFixture<ExtraBlogPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtraBlogPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtraBlogPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
