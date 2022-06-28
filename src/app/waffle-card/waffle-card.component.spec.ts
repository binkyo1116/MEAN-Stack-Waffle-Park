import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaffleCardComponent } from './waffle-card.component';

describe('WaffleCardComponent', () => {
  let component: WaffleCardComponent;
  let fixture: ComponentFixture<WaffleCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaffleCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaffleCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
