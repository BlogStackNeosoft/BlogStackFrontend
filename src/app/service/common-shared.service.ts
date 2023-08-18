import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonSharedService {

  private data = new BehaviorSubject<any>(null)

  constructor() { }

  getData()
  {
    return this.data.asObservable();
  }

  setData(data:any){
    return this.data.next(data);
  }
}
