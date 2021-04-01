import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortFiloDropMenuComponent } from './port-filo-drop-menu.component';

describe('PortFiloDropMenuComponent', () => {
  let component: PortFiloDropMenuComponent;
  let fixture: ComponentFixture<PortFiloDropMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortFiloDropMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortFiloDropMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
