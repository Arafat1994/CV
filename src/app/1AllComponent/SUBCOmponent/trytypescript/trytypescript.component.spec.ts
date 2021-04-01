import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrytypescriptComponent } from './trytypescript.component';

describe('TrytypescriptComponent', () => {
  let component: TrytypescriptComponent;
  let fixture: ComponentFixture<TrytypescriptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrytypescriptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrytypescriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
