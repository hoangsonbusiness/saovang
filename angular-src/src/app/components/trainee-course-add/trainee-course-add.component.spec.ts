import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TraineeCourseAddComponent } from './trainee-course-add.component';

describe('TraineeCourseAddComponent', () => {
  let component: TraineeCourseAddComponent;
  let fixture: ComponentFixture<TraineeCourseAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TraineeCourseAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TraineeCourseAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
