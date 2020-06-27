import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectListAddComponent } from './subject-list-add.component';

describe('SubjectListAddComponent', () => {
  let component: SubjectListAddComponent;
  let fixture: ComponentFixture<SubjectListAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectListAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectListAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
