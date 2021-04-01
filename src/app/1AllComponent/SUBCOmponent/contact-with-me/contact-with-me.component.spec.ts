import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactWithMEComponent } from './contact-with-me.component';

describe('ContactWithMEComponent', () => {
  let component: ContactWithMEComponent;
  let fixture: ComponentFixture<ContactWithMEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactWithMEComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactWithMEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
