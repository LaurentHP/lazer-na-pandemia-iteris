import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JogoPageComponent } from './jogo-page.component';

describe('JogoPageComponent', () => {
  let component: JogoPageComponent;
  let fixture: ComponentFixture<JogoPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JogoPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JogoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
