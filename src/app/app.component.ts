import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bikeA';
  usersuccess=false;
  constructor(public authService: AuthService) {
    this.usersuccess=Boolean(sessionStorage.getItem("usersuccess" ))||this.authService.userlogin
  }
  logout(){
    this.authService.userlogin=false;
    this.usersuccess=false;
    sessionStorage.clear();
  }
  }

