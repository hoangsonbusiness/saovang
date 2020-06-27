import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseManageAddComponent } from './course-manage-add.component';

describe('CourseManageAddComponent', () => {
  let component: CourseManageAddComponent;
  let fixture: ComponentFixture<CourseManageAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseManageAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseManageAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
