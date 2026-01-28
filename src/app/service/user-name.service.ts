import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserNameService {

  constructor() { }

   userName$  : Subject<string> = new Subject<string>();

  userNameSubObs$ : Observable<string> = this.userName$.asObservable()


  setData(val : string){
   this.userName$.next(val)
  }

}
