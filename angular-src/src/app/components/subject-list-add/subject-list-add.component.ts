import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { SubjectService } from "../../service/subject.service";

@Component({
  selector: 'app-subject-list-add',
  templateUrl: './subject-list-add.component.html',
  styleUrls: ['./subject-list-add.component.css']
})
export class SubjectListAddComponent implements OnInit {
  @Output() callback = new EventEmitter();
  
  form: FormGroup;

  constructor(private fb:FormBuilder, private route: Router
    , private service: SubjectService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      subject:['', Validators.required]
    });
  }

  addData(subject){
    this.service.add(subject)
            .subscribe(res => {
              alert('Tạo môn học mới thành công !');
              // this.route.navigateByUrl('/quan-ly/mon-hoc/danh-sach');
              this.callback.emit();
            });
  }

}
