import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioCompsComponent } from './audio-comps.component';

describe('AudioCompsComponent', () => {
  let component: AudioCompsComponent;
  let fixture: ComponentFixture<AudioCompsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AudioCompsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AudioCompsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
