import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { UserService } from 'src/app/service/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  Forgot !:FormGroup;

  constructor(private fb:FormBuilder,
    private router: Router,
    private authService: AuthService,
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
    this.authService.forgotPassword(this.Forgot.get('email_id')?.value).subscribe((data)=>{
      console.log(data.status)
      if (data.status) {
        localStorage.setItem('email_id', data.email_id);
        Swal.fire('Successfully OTP send to your Email Id').then(()=>{
          this.router.navigate(['/otp']);
        })
      }else
      {
        this.router.navigate(['/login']);
      }
    })
  }
}