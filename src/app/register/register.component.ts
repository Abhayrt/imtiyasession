import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
name:string="";
age:number=0;
mobileNumber:number=0;
emailId:string="";
username:string="";
password:string="";
confirmPassword:string="";
registerForm:FormGroup=new FormGroup({});

  constructor() { }
 
  ngOnInit(): void {
    this.registerForm=new FormGroup({
      name:new FormControl("",[Validators.required,Validators.pattern("^[A-Za-z]+$")]),
      age:new FormControl("",[Validators.required,Validators.min(1),Validators.max(120)]),
      mobileNumber:new FormControl("",[Validators.required,Validators.minLength(10),Validators.maxLength(11),Validators.pattern("^[0-9]*$")]),
      emailId:new FormControl("",[Validators.required,Validators.email]),
      username:new FormControl("",[Validators.required,Validators.pattern("^[A-Za-z-0-9]{4,20}*$")]),
      password:new FormControl("",[Validators.required,Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$")]),
      confirmPassword:new FormControl("",[Validators.required])
    },
    {validators:this.matchPassword}
    );
  }
   
  get fname(){
    return  this.registerForm.get("name");
  }
  get uage(){
    return  this.registerForm.get("age");
  }
  get email(){
     return this.registerForm.get("emailId");
  }
  get mobile(){
    return  this.registerForm.get("mobileNumber");
  }
  get usname(){
    return  this.registerForm.get("username");
  }
  get uspassword(){
    return  this.registerForm.get("password");
  }
  get cpassword(){
    return  this.registerForm.get("confirmPassword");
  }

  registerFun():void{
    console.log(this.registerForm.value);
  }
   
private matchPassword(regForm:FormGroup):any{
      let passControl=regForm.get("password");
      let confirmPassControl=regForm.get("confirmPassword");
      if(passControl.value==confirmPassControl.value)
       return null;  //validation pass
       else
       return {'passMismatched':true}
    }  
}
