import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-manage',
  templateUrl: './course-manage.component.html',
  styleUrls: ['./course-manage.component.css']
})
export class CourseManageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  add() {
    this.router.navigate(['quan-ly/khoa-hoc/them-moi']);
  }
}
