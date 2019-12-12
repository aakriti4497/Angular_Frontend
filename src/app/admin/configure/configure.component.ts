import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AdminService } from 'src/app/admin.service';
import { RoleConfig } from '../../RoleConfig';



@Component({
  selector: 'app-configure',
  templateUrl: './configure.component.html',
  styleUrls: ['./configure.component.css']
})
export class ConfigureComponent implements OnInit {
  project:any;
  role:any;
  pcObj:any;
  x:any;
  readonly APP_URL = 'http://localhost:1235/BillingSystem_Middle';

  constructor(public fb:FormBuilder,private admin:AdminService,private http:HttpClient) { }

  configureForm = this.fb.group({
    configId:[''],
    perHourBill:['',Validators.min(2)],
    location:['',Validators.required],
    projectId:['',Validators.required],
    roleId:['',Validators.required]
  })

  pconfig:RoleConfig;
  ngOnInit() {
    this.admin.getAllProjects()
    .subscribe(data => {this.project=data;console.log(this.project)},
    error =>{
      console.log('Error occured',error);
    }
  );
  this.admin.getRoleConfig()
  .subscribe(data => {this.pcObj=data;console.log(this.pcObj)},
  error => {
    console.log('Error ocurred',error); 
  }
);
this.admin.getRoles()
.subscribe(data => {this.role=data;console.log(this.role)},
     error => {
       console.log('Error occured',error);
     }
    );
     
     
  
    }
    onConfig(){
      console.log(this.configureForm.value);
      this.pconfig=this.configureForm.value;
      this.configureForm.reset();
      console.log("this is" + this.pconfig.projectId);
      this.http.post(this.APP_URL+'/submitRoleConfig',this.pconfig)
      .subscribe(data => {
        this.x=data;
        console.log(this.x)
        this.admin.getRoleConfig()
        .subscribe(data => {this.pcObj=data;console.log(this.pcObj)

    },
    error => {
      console.log('Error occured ',error);
    }
  );
},
error => {
  console.log('Error occured 1111',error);
}
      );

    
    
  }
  }


