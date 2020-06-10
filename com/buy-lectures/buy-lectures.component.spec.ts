import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyLecturesComponent } from './buy-lectures.component';

describe('BuyLecturesComponent', () => {
  let component: BuyLecturesComponent;
  let fixture: ComponentFixture<BuyLecturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyLecturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyLecturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
