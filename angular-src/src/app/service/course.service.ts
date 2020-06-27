import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  uri = 'http://localhost:8080/course';
  uriDel = 'http://localhost:8080/file/deleteFile';
  constructor(private http:HttpClient) { }

  add(title, overview, content2, thumpbnail, fileNameArr){
    var f = content2.indexOf("<p>");
    if ( f == 0 ) f = 3;
    var l = content2.indexOf("</p>");
    var short_content = content2.substring(f,l);
    const obj={
        title: title,
        overview: overview,
        content: content2,
        shortContent : short_content,
        thumpbnail: thumpbnail,
        listFileUpload: fileNameArr
    }
    return this.http.post(`${this.uri}/add`, obj);
  }

  update(id, obj){
    return this.http.post(`${this.uri}/update/${id}`, obj);
  }

  get(id){
    return this.http.get(`${this.uri}/get/${id}`);
  }

  async deleteFile(path) {
    return new Promise(resolve => {
      let result;
      const obj={
        path: path
      }
      this.http.post(this.uriDel, obj)
        .subscribe(async res => {
          let r:any = res;
          result = r.filename;
          resolve(result);
        });
      })
  }

  getData(){
    return this.http.get(`${this.uri}/show`);
  }

  delete(list_id){
    return this.http.post(`${this.uri}/delete`, list_id);
  }
}
