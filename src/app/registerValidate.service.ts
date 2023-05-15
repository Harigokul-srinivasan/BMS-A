import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterValidateService {
  id: any;
  forEach(arg0: (element: any) => void) {
    throw new Error('Method not implemented.');
  }
   private url='http://localhost:3000/users';
  constructor(private client:HttpClient) { }
  addUserInfo(data:any){
    return this.client.post("http://localhost:3000/users",data);
  }
  getusername(): Observable<any>{
    return this.client.get<any>(this.url);
  }
}
