import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AAAComponent } from './aaa.component';

describe('AAAComponent', () => {
  let component: AAAComponent;
  let fixture: ComponentFixture<AAAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AAAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AAAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
