import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MidrashaYomitComponent } from './midrasha-yomit.component';

describe('MidrashaYomitComponent', () => {
  let component: MidrashaYomitComponent;
  let fixture: ComponentFixture<MidrashaYomitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MidrashaYomitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MidrashaYomitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
