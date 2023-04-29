import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import validateForm from 'src/app/helpers/validateForm';

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
    this.isText ?
     this.eyeIcon = "fa fa-eye" : this.eyeIcon = "fa fa-eye-slash";
    this.isText ?
     this.passwordFieldType = "text" : this.passwordFieldType = "password";

  }

  onSubmit(){

    if(this.loginForm.valid){

      //send the obj to database
      console.log(this.loginForm.value);

    }
    else{

      validateForm.validateAllFormFields(this.loginForm);
      // throw the error using toaster and with required fields
    }
  }



}
