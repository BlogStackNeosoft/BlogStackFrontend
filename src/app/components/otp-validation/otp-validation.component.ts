import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgOtpInputComponent, NgOtpInputConfig } from 'ng-otp-input';
import { AuthService } from 'src/app/service/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-otp-validation',
  templateUrl: './otp-validation.component.html',
  styleUrls: ['./otp-validation.component.css']
})
export class OtpValidationComponent implements OnInit {

  constructor(private router: Router,
              private authService: AuthService
    ) { }

  ngOnInit(): void {
  }

  otp!: any;
  showOtpComponent = true;
  focusToFirstElementAfterValueUpdate: boolean = false;
  @ViewChild(NgOtpInputComponent, { static: false }) ngOtpInput!: NgOtpInputComponent;
  config: NgOtpInputConfig = {
    allowNumbersOnly: true,
    length: 6,
    isPasswordInput: false,
    disableAutoFocus: false,
    placeholder: ''
  };
  onOtpChange(otp: string) {
    this.otp = otp;
  }
otpBean:any=<any>{};

  verifyOtp(){
    console.log(this.otp);
    this.otpBean.email=localStorage.getItem("email_id");
    this.otpBean.otp=this.otp;
    this.authService.verifyOtp(this.otpBean).subscribe((data)=>{
      console.log("OTP is",data);
    if(data.status){
      Swal.fire('OTP Verify Successfully').then(()=>{
        this.router.navigate(['/reset']);
      })
    }else{
      this.router.navigate(['/login']);
    }
    })
  }
}