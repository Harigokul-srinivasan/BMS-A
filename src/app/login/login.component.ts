// import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private route: Router
  ) {}
  LoginForm = this.fb.group({
    username: [, Validators.required],
    emailvalue: [, Validators.required],
    mobilevalue: [, Validators.required],
    passwordvalue: [, Validators.required],
    confirmpasswordvalue: [, Validators.required]
  });
  error: boolean = false;

  loginform() {
    this.user();
    // this.admin();
    if (this.error) {
      alert('error');
      this.error=false;
    }
  }
  submit(){
    alert("submitted")
    this.user()
  }
  user() {
    this.http.get<any>(' http://localhost:3000/users').subscribe((value) => {
      const user = value.find(
        (u: any) =>
          u.email === this.LoginForm.value.emailvalue &&
          u.password === this.LoginForm.value.passwordvalue
      );

      if (user) {
        alert('login sucessful');
        this.LoginForm.reset();
        this.route.navigate(['product']);
      }
      this.error = false;
    });
  }
  // admin() {
  //   this.http.get<any>('http://localhost:3000/admin').subscribe((admin) => {
  //     const user = admin.find(
  //       (u: any) =>
  //         u.firstname === this.LoginForm.value.emailvalue &&
  //         u.password === this.LoginForm.value.passwordvalue
  //     );

  //     if (user) {
  //       alert('login sucessful');
  //       this.LoginForm.reset();
  //       this.route.navigate(['/home']);
  //     } else {
  //       this.error = true;
  //     }
  //   });
  // }

  ngOnInit(): void {}
}
