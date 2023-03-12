import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  passwordFieldType : string = "password";
  isText: boolean = false;
  eyeIcon: string = "fa fa-eye-slash";
  loginForm! : FormGroup;


  constructor(private formbuilder: FormBuilder) {

  }

  ngOnInit(): void {

    this.loginForm = this.formbuilder.group({
      username : ["",Validators.required],
      password : ["",Validators.required]
    });

  }

  hideOrShowPassword(){
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "fa fa-eye" : this.eyeIcon = "fa fa-eye-slash";
    this.isText ? this.passwordFieldType = "text" : this.passwordFieldType = "password";

  }

}
