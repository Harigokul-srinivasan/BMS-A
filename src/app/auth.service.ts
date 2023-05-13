import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from './login/login.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userlogin=false;
  isUserLogIn=Boolean(sessionStorage.getItem("usersuccess"));
  constructor() {}
    get isUserLoggedIn(){

      return false;
    }
    get isUserRole(){
      return false;
    }

     isLoggedIn = false;

  login() {
    this.isLoggedIn = true;
    this.isUserLogIn= Boolean(sessionStorage.getItem("usersuccess"));
  }

  logout() {
    this.isLoggedIn = false;
    this.isUserLogIn= Boolean(sessionStorage.getItem("usersuccess"));
  }
}

