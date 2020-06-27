import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit{

  uri = 'http://localhost:8080/login';

  constructor(private http:HttpClient, private helper: JwtHelperService) { 
  }

  ngOnInit(){
  }

  isAuthAdmin(){
    let jwt = localStorage.getItem('jwt');
    if (this.helper.isTokenExpired(jwt)) {
      localStorage.clear();
      return false;
    }
    let headers = {
      'jwt': jwt
    }
    return this.http.get(`${this.uri}/isAuthAdmin`,  { headers: headers })
        .toPromise().then(data => true).catch(err => false);
    // return this.http.get(`${this.uri}/isAuthAdmin`,  { withCredentials: true })
    //     .toPromise().then(data => true).catch(err => false);
  }
  
  isAuthenticated(user) {
    return new Promise ((resolve, reject) => {
      this.http.post(`${this.uri}/isAuthenticated`, user)
        .subscribe(data => {
          let rs:any = data;
          // this.cookieService.set('jwt', rs.jwt);
          localStorage.setItem('jwt', rs.jwt);
          resolve(true);
        },
         err => {
           resolve(false);}
        )
    }) 
  }

  isloggedIn(){
    let jwt = localStorage.getItem('jwt')
    if (jwt == null) return false;
        
    if (this.helper.isTokenExpired(jwt)) {
      localStorage.clear();
      return false;
    }

    return true;
  }

  logout() {
    localStorage.clear();
  }

  
}
