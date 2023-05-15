import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { RegisterValidateService } from './registerValidate.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // template:`

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
  data:any;
  ngOnInit(){
     this.fetchdata();
  }
  
  fetchdata(): void {
    this.service.getusername()
      .subscribe(response => {
        this.data = response.filter((users: { id: number; }) => users.id === 1); // Filter the data based on a specific condition
      });
  }
  }

