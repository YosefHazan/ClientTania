import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChitatComponent } from './chitat.component';

describe('ChitatComponent', () => {
  let component: ChitatComponent;
  let fixture: ComponentFixture<ChitatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChitatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChitatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
