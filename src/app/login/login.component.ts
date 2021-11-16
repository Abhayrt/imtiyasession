import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName:string="";
  password:string="";
  loginForm:FormGroup=new FormGroup({});
  constructor() { }

  ngOnInit(): void {
  this.loginForm=new FormGroup({
    userName:new FormControl(),
    password:new FormControl()
  });
  
  }
  loginFun():void{
   
  console.log(this.loginForm.value);
  console.log(this.loginForm.get(this.userName)?.value)
  }

}
