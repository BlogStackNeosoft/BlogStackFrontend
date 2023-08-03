import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../service/auth.service';

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let token: string | null = localStorage.getItem("jwt_token");
    if(token){
      request = request.clone({headers: request.headers.set('AUTHORIZATION','Bearer '+token)})
    }
    return next.handle(request).pipe(tap((event)=>{
      console.log(event);
      console.log(event);
      if(event.type==1 && localStorage.getItem("user_id")!=null){
        this.authService.refreshToken().subscribe(data=>{
          localStorage.clear();
          if (data.status) {
            localStorage.setItem('user_id', data.data.user_id);
            localStorage.setItem('jwt_token', data.data.jwt_token);
            localStorage.setItem('refresh_token', data.data.refresh_token);
          }
      });
    }
  }));
  }
}
