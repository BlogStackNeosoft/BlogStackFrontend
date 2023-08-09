import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ResetPasswordService } from 'src/app/service/reset-password.service';
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
              private restPasswordService: ResetPasswordService,
              private authService: AuthService) { }

  ngOnInit(): void {
    this.initResetForm();
  }

  initResetForm() {
    this.Reset = this.formBuilder.group({
      password: ['',[Validators.required]],
      confirmPassword: ['',[Validators.required]]
    })

    
  }

  resetPassword(){
     
    if(this.Reset.get('password') ?.value != this.Reset.get('confirmPassword') ?.value)
    Swal.fire("PASSWORD DOES NOT MATCH").then(() => this.router.navigate(["/reset-password"]))
  else{
    
    this.restPasswordService.changePassword(this.authService.getEmail(),this.Reset.get('password') ?.value)
    .subscribe((data)=>{
      console.log("Data from service: ",data)

      if(data.status == true)
      this.router.navigate(['/login'])
      if(data.status == false)
      this.router.navigate(['/reset-password'])
    })
  }
  }


  

}
