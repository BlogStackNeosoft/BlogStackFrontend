import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QnaService {

  baseUrl = "http://localhost:8080/v1.0/question/"
  constructor(private httpClient: HttpClient) { }

  public fetchAllQuestions(): Observable<any> {
    return this.httpClient.get(this.baseUrl);
  }
}
