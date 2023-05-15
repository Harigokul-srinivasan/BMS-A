import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { RegisterValidateService } from './registerValidate.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template:`
<ng-container *ngIf="user">
      <p>Name: {{ detail.firstname }}</p>
    </ng-container>
  `
})
export class AppComponent {
  title = 'bikeA';
  usersuccess=false;
  constructor(public authService: AuthService, private service: RegisterValidateService) {
    this.usersuccess=Boolean(sessionStorage.getItem("usersuccess" ))||this.authService.userlogin
  }
  logout(){
    this.authService.userlogin=false;
    this.usersuccess=false;
    sessionStorage.clear();
  }
  detail:any;
  ngOnInit(){
     this.fetchdata();
  }
  fetchdata(){
    this.service.getusername().subscribe(res =>{
      this.detail=res;
  }
    );
  }
  }

