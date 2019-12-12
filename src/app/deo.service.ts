import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employeees } from './Employeees';

@Injectable({
  providedIn: 'root'
})
export class DeoService {

  readonly APP_URL = "http://localhost:1235/BillingSystem_Middle/";

  constructor(private http:HttpClient) { }

  getprojectdeveloper(projectId):Observable<[Employeees]>{
    return this.http.get<[Employeees]>("http://localhost:1235/BillingSystem_Middle/getEmployeeesList?projectId="+projectId);

}
markAttendance(attendanceObj:any): Observable<boolean> {
  return this.http.post<any>("http://localhost:1235/BillingSystem_Middle/submitData",attendanceObj,{responseType:'text' as 'json'});
}
}