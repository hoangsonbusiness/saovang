import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { CourseService } from '../../service/course.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  uri = 'http://localhost:8080/login';
  isLogin = false;
  data:any = [];
  jwt = '';

  constructor(public authService: AuthService, private service: CourseService,
    private http:HttpClient, private router: Router) {
      // this.cookieValue = cookieService.get('jwt')
      // console.log('cookieValue = '+this.cookieValue)
      this.jwt = localStorage.getItem('jwt');

     }

  async ngOnInit() {
        this.isLogin = await this.isloggedIn();
        this.getData();
  }

  checkLogin(){
    let headers = {
      'jwt': this.jwt
    }
    return this.http.get(`${this.uri}/isLoggin`,  { headers: headers })
        .toPromise().then(data => true).catch(err => false);
  }

  async isloggedIn(){
    if (await this.checkLogin()) return true;
    return false;
  }

  getData(){
    this.service.getData()
    .subscribe((data: []) => {
      this.data = data;
    });
  }

  onLogoutClick() {
    this.authService.logout();
    this.router.navigate(['/dang-nhap']);
    return false;
  }
}

