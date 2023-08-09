import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, ObservableInput } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResetPasswordService {

  private baseUrl : String = "http://localhost:9095/v1.0/user/";
  constructor(private httpClient: HttpClient) { }

  changePassword(email: any,password: any): Observable<any>{

      let emailParams = new HttpParams()
      emailParams = emailParams.set("email",email)


      // let passwordParams = new HttpParams()
      emailParams = emailParams.set("password",password)
      return this.httpClient.patch(this.baseUrl+"reset-password"+"?"+emailParams,null)
  }
}
