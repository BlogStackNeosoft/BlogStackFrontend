import { HttpClient,HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ObservableInput } from 'rxjs';
import { User } from '../model/model';
import { catchError} from 'rxjs/operators';
import Swal from 'sweetalert2';
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // baseUrl = 'http://ec2-18-212-53-8.compute-1.amazonaws.com:9091/v1.0/authentication'
  
  baseUrl = 'http://localhost:9095/v1.0/authentication/'

  constructor(private httpClient: HttpClient, private router: Router) {
  }

  public signUp(user: User): Observable<any> {
    return this.httpClient.post<any>(this.baseUrl+"sign-up/",user);
  }

  public login(user: User): Observable<any>{
    return this.httpClient.post<any>(this.baseUrl+"sign-in/",user)
    .pipe(catchError((res: ObservableInput<any>)=>{
        console.log("Response : ",res)
        return res
    }))
  }

  public refreshToken(): Observable<any>{
    return this.httpClient.post<any>(this.baseUrl+"refresh-token/"+localStorage.getItem('refresh_token'),"")
  }

  public forgotPassword(email: string): Observable<any> {
    let params=new HttpParams();
    params=params.set("email",email);
    return this.httpClient.post(this.baseUrl+"forgot-password/?"+params,"");
  }

  public verifyOtp(otpBean:any): Observable<any>{
    return this.httpClient.post(this.baseUrl+"validate-otp/",otpBean);
  }

  public changePassword(email: any,password: any): Observable<any>{
    let emailParams = new HttpParams()
    emailParams = emailParams.set("email",email)
    emailParams = emailParams.set("password",password)
    return this.httpClient.patch(this.baseUrl+"reset-password/"+"?"+emailParams,null)
  }

  public signOut() {
    localStorage.clear();
    Swal.fire('Successfully Logout').then(()=>{this.router.navigate([""])})
  }

  public getToken() {
    return localStorage.getItem("jwt_token")
  }

  public getEmail(){
    return localStorage.getItem("email_id")
  }

  public getUserId(){
    return localStorage.getItem("user_id")
  }
}