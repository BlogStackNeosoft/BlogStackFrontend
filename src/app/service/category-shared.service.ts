import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Category } from '../model/model';

@Injectable({
  providedIn: 'root'
})
export class CategorySharedService {

  private category = new BehaviorSubject<string>('')
  constructor() { }

  getCategory(){
    console.log("getter called data: ",this.category)
    return this.category.asObservable();
  }

  setCategory(ctg: string){
    console.log("setting category: "+ctg)
    return this.category.next(ctg);
  }
}
