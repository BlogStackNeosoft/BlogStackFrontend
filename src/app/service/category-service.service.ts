import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../model/model';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  baseUrl = 'http://localhost:9090/v1.0/category/'
  questionByCategoryurl = 'http://localhost:9090/v1.0/question/category/'
  
  
  constructor(private httpClient: HttpClient) {}

  public fetchAll() : Observable<any>{
    console.log("Before making api call")
    return this.httpClient.get(this.baseUrl);
  }

  public addCategory(category : Category): Observable<any>{
     return this.httpClient.post(this.baseUrl,category);
  }

  public updatecategory(id: number,category:Category) : Observable<any>{
    return this.httpClient.put(this.baseUrl,category);
  }

  public deleteCategory(id:number){
    return this.httpClient.delete(this.baseUrl+id);
  }

  public getQuestionByCategory(data : string): Observable<any>{
    console.log(data)
    return this.httpClient.get(this.questionByCategoryurl+data)
  }
}
