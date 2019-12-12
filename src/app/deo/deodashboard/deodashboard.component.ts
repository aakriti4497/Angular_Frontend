import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DeoService } from '../../deo.service';
import { AdminService } from '../../admin.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-deodashboard',
  templateUrl: './deodashboard.component.html',
  styleUrls: ['./deodashboard.component.css']
})
export class DeodashboardComponent implements OnInit {
  project:any;
  employeees:any;


  constructor(public fb: FormBuilder,private deo:DeoService,private admin:AdminService,private http:HttpClient) { }
  
  attendanceForm=this.fb.group({

    mnth:[''],
    yrs:[''],
    halfDay:[''],
    fullDay:[''],
    projectId:[''],
    employeeId:['']
  })
  ngOnInit() {

    this.admin.getAllProjects()
    .subscribe(data => {this.project=data;console.log(this.project)},
    error => {
      console.log('Error occured',error);
  }
);
this.admin.getAllEmployeees()
.subscribe(data => {this.employeees=data;console.log(this.employeees)},
error => {
  console.log('Error occured',error);

}
);
  }
  projectselect(projectId:any){
    console.log(this.attendanceForm.value.projectId);
    this.deo.getprojectdeveloper(this.attendanceForm.value.projectId).subscribe(data=>this.employeees=data);
  }
  onmark(){
    console.log(this.attendanceForm.value);
    this.deo.markAttendance(this.attendanceForm.value).subscribe(
      data =>{
        alert("attendance marked successfuly");
},
error =>{
  alert("Attendance already marked");

}

    );
  }
}