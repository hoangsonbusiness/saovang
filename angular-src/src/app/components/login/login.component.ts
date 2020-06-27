import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService  } from '../../auth/auth.service';
import { Router } from '@angular/router';
import { CookieService } from "ngx-cookie-service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(private fb:FormBuilder, private service: AuthService,
    private router: Router, private cookieService: CookieService) { }
  
  ngOnInit(): void {
    this.form = this.fb.group({
      user: ['', Validators.required],
      pass:['', Validators.required]
    })
    if (!this.cookieService.get('jwt')) this.router.navigate(['quan-ly']);
  }

  async isAuthenticated(user, pass){
    let obj = {
      user: user,
      pass: pass
    }
    if (await this.service.isAuthenticated(obj)) {
      this.router.navigate(['quan-ly']);
      return true;
    }
    this.router.navigate(['dang-nhap']);
    return false;
  }

}
