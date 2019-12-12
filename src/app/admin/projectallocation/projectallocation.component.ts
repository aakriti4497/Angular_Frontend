import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { AdminService } from '../../admin.service';
import { RoleConfig } from '../../RoleConfig';

@Component({
  selector: 'app-projectallocation',
  templateUrl: './projectallocation.component.html',
  styleUrls: ['./projectallocation.component.css']
})
export class ProjectallocationComponent implements OnInit {
  project:any;
  role:any;
  employeees:any;
 

  constructor(public fb:FormBuilder,private admin:AdminService) { }
   allocationForm = new FormGroup({
     projectId:new FormControl(this.project),
     roleId: new FormControl(this.role),
     
     location:new FormControl(''),
     employeeId:new FormControl(this.employeees)
   });

  ngOnInit() {
    this.admin.getAllProjects().subscribe(data =>{this.project=data; console.log(this.project)},
    error => {
      console.log('Error occured',error);
    }
  );
  this.admin.getRoles().subscribe(data =>{this.role=data;console.log(this.role)},
  error => {
    console.log('Error occured',error);

  }
);
this.admin.getAllEmployeees().subscribe(data =>{this.employeees=data;console.log(this.employeees)},
error =>{
  console.log('error occured',error);
}
);
    
  }
  onAllocate() {
    console.log(this.allocationForm.value.projectId,this.allocationForm.value.roleId,this.allocationForm.value.location,this.allocationForm.value.employeeId);
    this.admin.allocation(this.allocationForm.value.projectId,this.allocationForm.value.roleId,this.allocationForm.value.location,this.allocationForm.value.employeeId).subscribe(
      data=>{
        alert("allocated successfully");
        this.allocationForm.reset(); },
  
  
  
    error=>{
  
      alert("Allready Presented this allocated ");
  
    });


}
}





  
 /* onAllocate() {
    console.log(this.allocationForm.value.pcObj,this.allocationForm.value.roleObj,this.allocationForm.value.empObj,this.allocationForm.value.location);
      this.admin.allocation(this.allocationForm.value.proObj,this.allocationForm.value.roleObj,this.allocationForm.value.empObj).subscribe(
        data => {
          alert("allocated successfully");
        },
      );


}
}*/



