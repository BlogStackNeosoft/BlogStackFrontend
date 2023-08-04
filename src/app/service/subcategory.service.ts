import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubcategoryService {
  baseUrl = 'http://localhost:9090/v1.0/subcategory/'
  constructor(private httpClient: HttpClient) { }

  public fetchAllSubcat(): Observable<any>{
    return this.httpClient.get(this.baseUrl);
  }

  public getSubcategoriesByCategory(categoryId: string) : Observable<any>{
    return this.httpClient.get(this.baseUrl+'category_id/'+categoryId)
  }

}
