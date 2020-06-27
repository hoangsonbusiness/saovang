import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../service/course.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  data:any = [];
  constructor(private service: CourseService) { }

  ngOnInit() {
    this.getData();
  }

  getData(){
    this.service.getData()
    .subscribe((data: []) => {
      this.data = data;
    });
  }

}
