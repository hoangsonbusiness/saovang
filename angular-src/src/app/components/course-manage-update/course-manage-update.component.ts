import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import {  FileUploader } from 'ng2-file-upload';
import { Router, ActivatedRoute } from "@angular/router";
import { CourseService } from "../../service/course.service";

const uploadAPI = 'http://localhost:8080/file/singleUpload'; // better use a service class

@Component({
  selector: 'app-course-manage-update',
  templateUrl: './course-manage-update.component.html',
  styleUrls: ['./course-manage-update.component.css']
})
export class CourseManageUpdateComponent implements OnInit {

  fileNameArr = [];
  editor1:String = "";
  editor2:String = "";
  thumpbnail = "";
  id:Number = 0;
  title:String = "";
  data:any;
  form: FormGroup;
  public uploader: FileUploader = new FileUploader({ url: uploadAPI, itemAlias: 'file' });
  constructor(private fb:FormBuilder, private route: Router
    , private service: CourseService, private routeActive: ActivatedRoute) { 

  }

  ngOnInit(): void {
    this.form = this.fb.group({
      title:['', Validators.required]
    });

    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
         response = JSON.parse(response);
         let filename = response.filename;
         if (filename != "") 
          {
            let obj = {
              filename: filename,
              orginalFileName: response.orginalFileName
            }
            this.fileNameArr.push(obj);
          }
        //  alert('Your file has been uploaded successfully');
    };

    this.routeActive.params.subscribe(params => {
      this.service.get(params['id']).subscribe(res => {
        this.data = res; 
        if (this.data !== undefined && this.data !== null) {
          this.title = this.data[0].title;
          this.editor1 = this.data[0].overview;
          this.editor2 = this.data[0].content;
          this.fileNameArr = this.data[0].listFileUpload;
          this.form.patchValue({
            title: this.title
          })
        }
      });
    });
  }

  updateData(){
    this.editor1 = this.editor1.replace("</html>","")
                    .replace("</title>","")
                    .replace("</head>","")
                    .replace("</body>","")
                    .replace("<html>","")
                    .replace("<title>","")
                    .replace("<head>","")
                    .replace("<body>","").trim();
    this.editor2 = this.editor2.replace("</html>","")
                    .replace("</title>","")
                    .replace("</head>","")
                    .replace("</body>","")
                    .replace("<html>","")
                    .replace("<title>","")
                    .replace("<head>","")
                    .replace("<body>","").trim();
    var f = this.editor1.indexOf("<p>");
    if ( f == 0 ) f = 3;
    var l = this.editor1.indexOf("</p>");
    var short_content = this.editor1.substring(f,l);
    let obj = {
      title: this.form.get('title').value,
      overview: this.editor1,
      content: this.editor2,
      shortContent: short_content,
      thumpbnail: this.thumpbnail,
      listFileUpload: this.fileNameArr
    }
    console.log(this.editor1)
    this.routeActive.params.subscribe(params => {
      this.service.update(params['id'], obj).subscribe(res => {
        alert('Cập nhật khóa học thành công !');
        this.route.navigateByUrl('/quan-ly/khoa-hoc/danh-sach');
      });
    });
  }

  async deleteFile(path){
    let filename = await this.service.deleteFile(path);
    if ( filename != '' ) {
      let index = 0;
      index = (filename as String).lastIndexOf("/");
      filename = (filename as String).substring(index + 1, (filename as String).length);
    }
    this.fileNameArr = await this.fileNameArr.filter(function(e) { return e.filename !== filename })
    alert("Delete file successfully !");
  }

  setThumpbnail(path){
    this.thumpbnail = 'http://localhost:8080/static/' + path;
    alert("Set Thumpbnail successfully !");
  }

  copyLinkFile(path) {
    var dummy = document.createElement("textarea");
    document.body.appendChild(dummy);
    dummy.setAttribute("id", "myInput1");
    var copyText = (<HTMLInputElement>document.getElementById("myInput1"));
    let fullPath = 'http://localhost:8080/static/' + path;
    copyText.value = fullPath;
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    document.body.removeChild(dummy);
    alert("Copy path file successfully !");
  }

}
