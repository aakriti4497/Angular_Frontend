import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { Projects } from './Projects';
import { EmployeeRole } from './EmployeeRole';
import { RoleConfig } from './RoleConfig';
import { Observable } from 'rxjs';
import { Employeees } from './Employeees';


@Injectable({
  providedIn: 'root'
})
export class AdminService {
  getAllEmployeees(): any {
    return this.http.get<Employeees[]>(this.APP_URL + '/getAllEmployeees');
  }
  readonly APP_URL='http://localhost:1235/BillingSystem_Middle';
  constructor(private http:HttpClient){}

  getRoleConfig() {
    return this.http.get<RoleConfig[]>(this.APP_URL + '/getAllRoleConfig');
  }
  getRoles() {
    return this.http.get<EmployeeRole[]>(this.APP_URL + '/getRoles');
  }
  getAllProjects() {
   return this.http.get<Projects[]>(this.APP_URL + '/getAllProjects');
  }

  allocation(projectId,roleId,location,employeeId):Observable<any> {
    return this.http.post<any>("http://localhost:1235/BillingSystem_Middle/submitallocate?projectId="+projectId+"&&roleId="+roleId+"&&location="+location+"&&employeeId="+employeeId,
     {responseType:'text' as 'json'});
  
}
}
