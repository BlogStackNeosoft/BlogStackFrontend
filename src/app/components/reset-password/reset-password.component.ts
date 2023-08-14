import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private authService: AuthService) { }

  ngOnInit(): void {
    this.initResetForm();
  }

  PASSWORD_PATTERN ="^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#&()–[{}]:;',?/*~$^+=<>]).{8,20}$";

  initResetForm() {
    this.Reset = this.formBuilder.group({
      password: ['',[Validators.required,Validators.min(8),Validators.max(16),Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
      )]],
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
    })
  }
  }
}