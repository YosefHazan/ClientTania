import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowLessonComponent } from './show-lesson.component';

describe('ShowLessonComponent', () => {
  let component: ShowLessonComponent;
  let fixture: ComponentFixture<ShowLessonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowLessonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowLessonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
