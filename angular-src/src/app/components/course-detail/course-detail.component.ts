import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from '../../service/course.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {

  title:String = "";
  content:String = "";
  data:any;

  constructor(private route: ActivatedRoute,
    private router: Router, private service: CourseService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.service.get(params['id']).subscribe(res => {
        if (res != null && res != undefined) {
          this.data = res[0]; 
          this.title = this.data.title;
          this.content = this.data.content;
        }      
      });
    });
  }

}
