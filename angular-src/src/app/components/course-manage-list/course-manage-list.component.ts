import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../service/course.service';
import { Router } from '@angular/router';
import {FormGroup, FormBuilder, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-course-manage-list',
  templateUrl: './course-manage-list.component.html',
  styleUrls: ['./course-manage-list.component.css']
})
export class CourseManageListComponent implements OnInit {

  list_id:any= [];
  //Paging
  total : number;
  page: number = 1;
  data:any = [];

  form: FormGroup;
  
  constructor(private router: Router, private service: CourseService
    , private fb:FormBuilder) { }

  ngOnInit(): void {

    this.form = this.fb.group({
      list_id: this.fb.array([])
    });
    this.getData();
    
  }

  getData(){
    this.service.getData()
    .subscribe((data: []) => {
      this.data = data;
      this.total = this.data.length;
    });
  }

  onChange(id:string, isChecked: boolean) {
    this.list_id = <FormArray>this.form.controls.list_id;
  
    if(isChecked) {
      this.list_id.push(new FormControl(id));
    } else {
      let index = this.list_id.controls.findIndex(x => x.value == id)
      this.list_id.removeAt(index);
    }
  }

  add() {
    this.router.navigate(['quan-ly/khoa-hoc/them-moi']);
  }

  delete() {
    this.service.delete(this.list_id.value)
    .subscribe(res=> {
      this.getData();
    });
  }

}
