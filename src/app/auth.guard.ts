import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService){

  }
  canActivate(){
    if(this.authService.isUserLoggedIn){
      return true;
    }else{
      window.alert('permisssion denied with-out Login');
      
      return false;
    }
  }

}
