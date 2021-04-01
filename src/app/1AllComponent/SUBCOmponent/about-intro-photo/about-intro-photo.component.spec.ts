import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutIntroPhotoComponent } from './about-intro-photo.component';

describe('AboutIntroPhotoComponent', () => {
  let component: AboutIntroPhotoComponent;
  let fixture: ComponentFixture<AboutIntroPhotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutIntroPhotoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutIntroPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
