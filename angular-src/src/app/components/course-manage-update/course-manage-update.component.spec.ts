import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseManageUpdateComponent } from './course-manage-update.component';

describe('CourseManageUpdateComponent', () => {
  let component: CourseManageUpdateComponent;
  let fixture: ComponentFixture<CourseManageUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseManageUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseManageUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
