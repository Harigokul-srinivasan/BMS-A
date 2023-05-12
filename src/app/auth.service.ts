import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

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
    // loggedIn(){
    //   return !!localStorage.getItem('token')
    // }
    // logoutUser(){
    //   localStorage.removeItem('token')
    //   this._router.navigate(['home'])
    // }
}
