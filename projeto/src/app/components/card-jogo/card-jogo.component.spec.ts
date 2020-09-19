import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardJogoComponent } from './card-jogo.component';

describe('CardJogoComponent', () => {
  let component: CardJogoComponent;
  let fixture: ComponentFixture<CardJogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardJogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardJogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
