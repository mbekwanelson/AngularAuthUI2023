import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  passwordFieldType : string = "password";
  isText: boolean = false;
  eyeIcon: string = "fa-eye-slash"

  constructor() { }

  ngOnInit(): void {
  }

  hideOrShowPassword(){
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash";
    this.isText ? this.passwordFieldType = "text" : this.passwordFieldType = "password";

  }

}
