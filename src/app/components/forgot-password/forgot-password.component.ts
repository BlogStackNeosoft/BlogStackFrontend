import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  Forgot !:FormGroup;

  constructor(private fb:FormBuilder,
    private router: Router,
    private userService: UserService,
    ) { }

  ngOnInit(): void {
    this.initForgotForm();
  }

  initForgotForm() {
   this.Forgot=this.fb.group({
    email_id: ['', [Validators.required, Validators.email]],
   });
  }

  sendMail(){
    console.log('value of forgot password form', this.Forgot.value);
    this.userService.forgotPassword(this.Forgot.value).subscribe((data)=>{
      console.log(data.status)
    })
  }
}