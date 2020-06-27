import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TraineeCourseService {
  uri = 'http://localhost:8080/traineeCourse';
  constructor(private http:HttpClient) { }

  add(obj) {
    return this.http.post(`${this.uri}/add`, obj);
  }

  update(id) {
    let obj = {
      _id: id
    }
    return this.http.post(`${this.uri}/update`, obj);
  }

  delete(list_id){
    return this.http.post(`${this.uri}/delete`, list_id);
  }

}
