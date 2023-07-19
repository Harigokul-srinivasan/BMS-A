import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterValidateService {
  constructor(private client:HttpClient) { }
  addUserInfo(data:any){
    return this.client.post("http://localhost:3000/users",data);
  }
  importBike(data:any){
    return this.client.post(" http://localhost:3000/importBike",data);
  }
  getImportBike():Observable<any>{
    return this.client.get("http://localhost:3000/importBike");
  }
  getData(): Observable <any>{
    return this.client.get("http://localhost:3000/users");
   }

   updateUserInfo(data:any,id:any){
    return this.client.patch(`http://localhost:3000/users/${id}`,data);
  }
}

