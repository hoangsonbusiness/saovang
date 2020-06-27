import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseManageListComponent } from './course-manage-list.component';

describe('CourseManageListComponent', () => {
  let component: CourseManageListComponent;
  let fixture: ComponentFixture<CourseManageListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseManageListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseManageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
