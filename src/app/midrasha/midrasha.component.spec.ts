import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MidrashaComponent } from './midrasha.component';

describe('MidrashaComponent', () => {
  let component: MidrashaComponent;
  let fixture: ComponentFixture<MidrashaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MidrashaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MidrashaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
