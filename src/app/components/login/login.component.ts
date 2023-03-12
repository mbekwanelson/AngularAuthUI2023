import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  passwordFieldType : string = "password";
  isText: boolean = false;
  eyeIcon: string = "fa fa-eye-slash"
  constructor() { }

  ngOnInit(): void {
  }

  hideOrShowPassword(){
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "fa fa-eye" : this.eyeIcon = "fa fa-eye-slash";
    this.isText ? this.passwordFieldType = "text" : this.passwordFieldType = "password";

  }

}
