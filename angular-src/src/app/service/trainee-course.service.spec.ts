import { TestBed } from '@angular/core/testing';

import { TraineeCourseService } from './trainee-course.service';

describe('TraineeCourseService', () => {
  let service: TraineeCourseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TraineeCourseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
