import { Component, OnInit, EventEmitter, Output, Input, OnChanges } from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { Router } from "@angular/router";
import { TraineeCourseService } from "../../service/trainee-course.service";
import { SubjectService } from "../../service/subject.service";
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-trainee-course-add',
  templateUrl: './trainee-course-add.component.html',
  styleUrls: ['./trainee-course-add.component.css']
})
export class TraineeCourseAddComponent implements OnInit, OnChanges {

  @Input() mode:String;
  @Input() id:Number;
  @Output() callback = new EventEmitter();
  
  form: FormGroup;
  buttonName:String = "Tạo mới";
  list_id:any = [];

  //Paging
  data:any = [];

  constructor(private fb:FormBuilder, private route: Router
    , private service: TraineeCourseService, private subjectService: SubjectService) { }


  ngOnChanges() {
    if (this.mode == "UPD") {
      this.buttonName = "Cập nhật";
    } else {
      this.buttonName = "Tạo mới";
    }
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      traineeCourse:['', Validators.required],
      list_id: new FormArray([])
    });

    this.getData()
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

  getData(){
    this.subjectService.getData()
    .subscribe((data: []) => {
      this.data = data;
    });
  }

  addData(traineeCourse){
    if (this.mode == "UPD") {
      this.service.update(this.id)
              .subscribe(res => {
                alert('Cập nhật khóa sinh viên thành công !');
                this.callback.emit();
              });
    } else {
      console.log('len = '+ this.list_id.value.length)
      let sub = [];
      if (this.list_id.value.length > 0) {
        for (let i = 0; i < this.list_id.value.length; i ++) {
          sub.push({_id: this.list_id.value[i]});
        }
      }

      console.log('sub ='+ sub)
      let obj = {
        name: traineeCourse,
        subjects: sub
      }
      this.service.add(obj)
              .subscribe(res => {
                alert('Tạo khóa sinh viên mới thành công !');
                this.callback.emit();
              });
    }
  }

}
