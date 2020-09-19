import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SobrePageComponent } from './sobre-page.component';

describe('SobrePageComponent', () => {
  let component: SobrePageComponent;
  let fixture: ComponentFixture<SobrePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SobrePageComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SobrePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
