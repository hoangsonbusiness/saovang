import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../service/course.service';

@Component({
  selector: 'app-course-index',
  templateUrl: './course-index.component.html',
  styleUrls: ['./course-index.component.css']
})
export class CourseIndexComponent implements OnInit {

  data:any = [];
  length:number = 0;
  className = '';

  constructor(private service: CourseService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.service.getData()
    .subscribe((data: []) => {
      this.data = data;
      this.length = this.data.length;
      if (this.length % 2 == 0) this.className = 'col-md-6 col-xs-12 col-sm-12';
      if (this.length % 3 == 0) this.className = 'col-md-4 col-xs-12 col-sm-12';
    });
  }

}
