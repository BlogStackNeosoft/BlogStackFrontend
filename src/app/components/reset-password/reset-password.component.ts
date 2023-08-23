import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  Reset !:FormGroup;
  public showPassword: boolean = false;
  public showConfirmPassword: boolean = false;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private authService: AuthService) { }

  ngOnInit(): void {
    this.initResetForm();
  }

  initResetForm() {
    this.Reset = this.formBuilder.group({
      password: ['', [Validators.required,Validators.minLength(6),Validators.maxLength(16),PasswordStrengthValidator]],
      confirmPassword: ['',[Validators.required]]
    })
  }

  resetPassword(){
    if(this.Reset.get('password') ?.value != this.Reset.get('confirmPassword') ?.value)
    Swal.fire('Password not matched').then(() => this.router.navigate(["/reset"]))
  else{
    this.authService.changePassword(this.authService.getEmail(),this.Reset.get('password') ?.value)
    .subscribe((data)=>{
      console.log("Data from service: ",data)
      if(data.status == true)
      this.router.navigate(['/login'])
      if(data.status == false)
      this.router.navigate(['/reset'])
    })}
  }
}
 

export const PasswordStrengthValidator = function (control: AbstractControl): ValidationErrors | null {

  let value: string = control.value || '';
  let set: any[] = ["Lower Case", "Upper Case", "Number", "Special Characters"];

  console.log("set values", set.values())

  console.log("message", messageGenerator(set));

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