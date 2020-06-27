import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TraineeCourseListComponent } from './trainee-course-list.component';

describe('TraineeCourseListComponent', () => {
  let component: TraineeCourseListComponent;
  let fixture: ComponentFixture<TraineeCourseListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TraineeCourseListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TraineeCourseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
