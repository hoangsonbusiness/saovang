import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  uri = 'http://localhost:8080/subject';

  constructor(private http:HttpClient) { }

  add(subject) {
    let obj={
      name: subject
    }
    return this.http.post(`${this.uri}/add`, obj);
  }

  getData(){
    return this.http.get(`${this.uri}/show`);
  }

  delete(list_id){
    return this.http.post(`${this.uri}/delete`, list_id);
  }
}
