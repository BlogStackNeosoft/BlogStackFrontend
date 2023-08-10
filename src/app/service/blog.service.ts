import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  baseURL="http://localhost:9092/v1.0/blog/"
  constructor(
    private httpClient:HttpClient,

  ) { 
  }

  getAllBlogs():Observable<any>{
    return this.httpClient.get<any>(this.baseURL);
  }

  getBlogsById(blogId:string):Observable<any>{
    return this.httpClient.get<any>(this.baseURL+blogId);
  }

  saveBlog(blog:any):Observable<any>{
    return this.httpClient.post<any>(this.baseURL,blog);
  }

  updateBlog(blog:any):Observable<any>{
    return this.httpClient.put<any>(this.baseURL,blog);
  }

  deleteBlog(blogId:string):Observable<any>{
    return this.httpClient.delete<any>(this.baseURL);
  }
}
