import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, FormArray } from '@angular/forms';
import { SubjectService } from '../../service/subject.service';


@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.css']
})
export class SubjectListComponent implements OnInit {
  
  form: FormGroup;

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

}
