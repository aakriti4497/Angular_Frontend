import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url:string="http://localhost:1235/BillingSystem_Middle/";

  constructor(private http:HttpClient) { }

  validateUser(userId: any, password: any): Observable<any> {
    return this.http.post<any>("http://localhost:1235/BillingSystem_Middle/validateRole?userId="+userId +
    "&&password="+password,null,
    {responseType:'text' as 'json'});

  }
 
}
