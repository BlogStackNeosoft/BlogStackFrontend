import { Component, OnInit } from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http'
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { User } from 'src/app/model/model';
import { AuthService } from 'src/app/service/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent implements OnInit {
  signUp!: FormGroup;
  Login!: FormGroup;
  public showPassword: boolean = false;
  public showConfirmPassword: boolean = false;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initSignUpForm();
    this.initLoginForm();
  }

  tabChanged() { 
    console.log("tabChanged function called")
    this.showConfirmPassword = false;
    this.showPassword = false;
  }

  initSignUpForm() {
    this.signUp = this.fb.group({
      first_name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      email_id: ['', [Validators.required,Validators.email]],
      password: ['', [Validators.required,Validators.minLength(6),Validators.maxLength(16),PasswordStrengthValidator]],
      confirmPassword: ['', [Validators.required]]
    });
  }

  initLoginForm() {
    this.Login = this.fb.group({
      email_id: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  signBean: User = <User>{};
  
  signUpForm() {

    Object.values(this.signUp.controls).forEach((control) => {

      if (control.invalid) {
        control.markAsDirty();
        control.updateValueAndValidity({ onlySelf: true });
      }
    });

    if (
      this.signUp.get('password')?.value !=
      this.signUp.get('confirmPassword')?.value
    ) {
      Swal.fire('Password not matched');
    }
    else {
      console.log('values of form', this.signUp.value);
      this.signBean.email_id = this.signUp.get('email_id')?.value;
      this.signBean.first_name = this.signUp.get('first_name')?.value;
      this.signBean.last_name = this.signUp.get('last_name')?.value;
      this.signBean.password = this.signUp.get('password')?.value;
      this.signBean.blogStackRoleDetails = [];
      this.signBean.blogStackRoleDetails.push({ "role_name": "user" })
      this.signBean.address = "";
      this.signBean.gender = "";
      this.signBean.date_of_birth = "";
      this.signBean.phone_number = "";
      this.signBean.profile_photo = "";
      this.signBean.status = "";
      this.authService.signUp(this.signBean).subscribe((data) => {
        console.log(data);
        if (data.status) {
          Swal.fire('Successfully Registered').then(() => {
            window.location.reload();
          })
        }
      });
    }
  }

  login() {
    console.log('value of login form', this.Login.value);
    this.authService.login(this.Login.value).subscribe((data) => {
      console.log(data.status)
      if(data.status){
        console.log(event);
      }
      if (data.status) {
        localStorage.setItem('jwt_token', data.data.jwt_token);
        localStorage.setItem('user_id', data.data.user_id);
        localStorage.setItem('refresh_token', data.data.refresh_token);
        localStorage.setItem('role',data.data.user_roles[0]);
        Swal.fire('Successfully Login').then(() => {
          if (localStorage.getItem('role') == 'admin') {
            this.router.navigate(['/admin']);
          } else {
            this.router.navigate(['/blogs']);
          }
      });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        });
      }
    });
  }

  forgot(){
    this.router.navigate(['/forgot'])
  }
}

export const PasswordStrengthValidator = function (control: AbstractControl): ValidationErrors | null {

  let value: string = control.value || '';
  let set: any[] = ["Lower Case", "Upper Case", "Number", "Special Characters"];

  console.log("set values", set.values())

  if (!value) {
    return null
  }

  let upperCaseCharacters = /[A-Z]+/g
  let lowerCaseCharacters = /[a-z]+/g
  let numberCharacters = /[0-9]+/g
  let specialCharacters = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

  if (upperCaseCharacters.test(value)) {
    set[1] = "";

  }
  if (lowerCaseCharacters.test(value)) {
    set[0] = "";

  }
  if (numberCharacters.test(value)) {
    set[2] = "";

  }
  if (specialCharacters.test(value)) {
    set[3] = "";

  }
  if (messageGenerator(set)== "") {
    return null
  }else{
    return {
      passwordStrength: 'Password must contain the following: ' + messageGenerator(set),
    }
  }
}

function messageGenerator(map: any[]): string {

  let msg: string = "";

  for (let index = 0; index <= map.length - 1; index++) {
    console.log("map index value: " + "index" + index, map[index]);
    if(map[index]==""){
    }else{
      msg = msg + map[index] + ", ";
    }
  }
  return msg;
}