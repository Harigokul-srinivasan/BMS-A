import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from './login/login.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {}
    get isUserLoggedIn(){

      return false;
    }
    get isUserRole(){
      return false;
    }

     isLoggedIn = false;

  login() {
    if(LoginComponent)
    this.isLoggedIn = true;
  }

  logout() {
    if(LoginComponent)
    this.isLoggedIn = false;
  }
}

