import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import validateForm from 'src/app/helpers/validateForm';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  passwordFieldType : string = "password";
  isText: boolean = false;
  eyeIcon: string = "fa-eye-slash"
  signupForm! : FormGroup

  constructor(private formbuilder: FormBuilder) {

  }

  ngOnInit(): void {

    this.signupForm = this.formbuilder.group({
      firstname : ["",Validators.required],
      lastname : ["",Validators.required],
      email : ["",Validators.required],
      username : ["",Validators.required],
      password : ["",Validators.required]
    });
  }

  hideOrShowPassword(){
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash";
    this.isText ? this.passwordFieldType = "text" : this.passwordFieldType = "password";

  }

  onSignUp(){

    if(this.signupForm.valid){

      //send the obj to database
      console.log(this.signupForm.value);

    }
    else{

      validateForm.validateAllFormFields(this.signupForm);
      // throw the error using toaster and with required fields
    }

  }

}
