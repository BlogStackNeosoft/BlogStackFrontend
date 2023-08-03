import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PostQuestionBean } from '../model/model';

@Injectable({
  providedIn: 'root'
})
export class QnaService {

  baseUrl = "http://localhost:9090/v1.0/question/"
  constructor(private httpClient: HttpClient) { }

  public fetchAllQuestions(): Observable<any> {
    return this.httpClient.get(this.baseUrl);
  }

  public postQuestion(postQuestionBean:PostQuestionBean): Observable<any>{
    return this.httpClient.post(this.baseUrl, postQuestionBean)
  }
}
