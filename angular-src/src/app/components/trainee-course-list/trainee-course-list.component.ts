import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, FormArray } from '@angular/forms';
import { SubjectService } from '../../service/subject.service';

@Component({
  selector: 'app-trainee-course-list',
  templateUrl: './trainee-course-list.component.html',
  styleUrls: ['./trainee-course-list.component.css']
})
export class TraineeCourseListComponent implements OnInit {

  form: FormGroup;

  mode:String;
  id:Number;

  //Paging
  total : number;
  page: number = 1;
  data:any = [];

  constructor(private router: Router, private service: SubjectService
    , private fb: FormBuilder) { }

  ngOnInit() {
    this.getData();
  }

  getData(){
    this.service.getData()
    .subscribe((data: []) => {
      this.data = data;
      this.total = this.data.length;
    });
  }

  delete(id) {
    this.service.delete({_id: id})
    .subscribe(res=> {
      this.getData();
    });
  }

  update(id) {
   this.mode = "UPD";
   this.id = id;
  }

}
