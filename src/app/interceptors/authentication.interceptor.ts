import { Injectable, Injector } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, map, tap, throwError } from 'rxjs';
import { AuthService } from '../service/auth.service';

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {
  refreshToken :boolean=false;

  constructor(private authService: AuthService,private injector: Injector) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let authService = this.injector.get(AuthService);
    let tokenReq = request.clone({
      setHeaders: {
        Authorization: `Bearer ${authService.getToken()}`,
        UserId: `${authService.getUserId()}`
      }
    })
    return next.handle(tokenReq).pipe(tap({
      next:(event)=>
      {
        console.log("data to be retuned form next",event)
      },
      error:(error: HttpErrorResponse)=>{
        console.log("error",error)
        console.log("error status",error.status)
        if(error.status==401){
          if(this.refreshToken==false){
            this.authService.refreshToken().subscribe(data=>{
              console.log("data from refresh token ",data);
              localStorage.clear();
              localStorage.setItem("user_id",data.data.user_id);
              localStorage.setItem("jwt_token",data.data.jwt_token);
              localStorage.setItem("refresh_token",data.data.refresh_token);
              request.clone({
                setHeaders: {
                  Authorization: `Bearer ${authService.getToken()}`
                }})
            })
            this.refreshToken=true;
          }
        }
      }
    }))
  }}