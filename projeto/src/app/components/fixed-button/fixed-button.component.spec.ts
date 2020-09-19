import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedButtonComponent } from './fixed-button.component';

describe('FixedButtonComponent', () => {
  let component: FixedButtonComponent;
  let fixture: ComponentFixture<FixedButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FixedButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FixedButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
