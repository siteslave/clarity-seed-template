import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

import { JwtHelper } from 'angular2-jwt';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  userType: string;
  isLogging = false;
  isError = false;
  errorMessage: string;

  jwtHelper: JwtHelper = new JwtHelper();

  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }


  doLogin() {
    if (this.username && this.password && this.userType) {
      this.isError = false;
      this.isLogging = true;
      this.loginService.doLogin(this.username, this.password, this.userType)
        .then((resp: any) => {
          this.isLogging = false;
          if (resp.ok) {
            const decodedToken = this.jwtHelper.decodeToken(resp.token);
            sessionStorage.setItem('token', resp.token);
            sessionStorage.setItem('fullname', decodedToken.fullname);

            if (this.userType === '1') {
              this.router.navigate(['admin']);
            } else {
              this.router.navigate(['users']);
            }
          } else {
            this.isError = true;
            this.errorMessage = resp.message;
          }
        })
        .catch(err => {
          console.log(err);
          this.isLogging = false;
      })
    }
  }

  enterLogin(event) {
    if (event.charCode === 13) {
      this.doLogin();
    }
  }
  
  ngOnInit() {
  }

}
