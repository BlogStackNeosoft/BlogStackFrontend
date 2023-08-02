import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Payload, Root, User } from '../model/model';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  // baseUrl = 'http://ec2-18-212-53-8.compute-1.amazonaws.com:9091/v1.0/user/'

  baseUrl = 'http://localhost:8080/v1.0/user/'

  constructor(private httpClient: HttpClient) { }

  public fetchAll(): Observable<any> {
    return this.httpClient.get(this.baseUrl);
  }

  public updateUser(user: Root): Observable<any> {
    return this.httpClient.put(this.baseUrl, user);
  }

  public deleteUser(email_id: string): Observable<any> {
    return this.httpClient.delete(this.baseUrl + email_id);
  }

  public fetchByEmailId(email_id: string | null): Observable<any> {
    return this.httpClient.get(this.baseUrl + email_id);
  }

  public updateUserProfile(user: User): Observable<any> {
    return this.httpClient.put(this.baseUrl, user);
  }

  public uploadProfilePhoto(email: string, formData: FormData): Observable<any> {
    return this.httpClient.put(this.baseUrl + "profile-photo/" + email, formData);
  }
}