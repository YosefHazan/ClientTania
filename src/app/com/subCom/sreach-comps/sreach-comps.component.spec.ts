import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SreachCompsComponent } from './sreach-comps.component';

describe('SreachCompsComponent', () => {
  let component: SreachCompsComponent;
  let fixture: ComponentFixture<SreachCompsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SreachCompsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SreachCompsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
