import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,private fb:FormBuilder,private userService:UserService) { }

  userObj:any;
  userForm=this.fb.group({
    userId:['',Validators.required],
    password:['',Validators.required],
  

  });

  ngOnInit() {
    this.userObj=JSON.parse(sessionStorage.userObj);

  }
  get userId(){
    return this.userForm.get('userId');
  }
  get password(){
     return this.userForm.get('password');
  }


   loginSubmit(){
   console.log(this.userForm.value);
   this.userService.validateUser(this.userForm.value.userId,this.userForm.value.password).subscribe
   (data=>{

     console.log(data);
     alert("welcome user");
     sessionStorage.setItem("userObj",JSON.stringify(this.userObj));
     if(data=='admin')
     {
       alert('welcome admin');
       this.router.navigate(['/admin']);
   }
    else if(data=='Data Entry Operator'){
       alert("welcome data entry operator");
       this.router.navigate(['/deo']);
    }
  },
  error=>{
    alert("Email or Password is incorrect");
  }
);
 }
}


