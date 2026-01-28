import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Itodos } from '../component/model/todos';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(private _httpClient : HttpClient) { }

 

  BASE_URL : string = environment.BASE_URL;

  TODOS_URL : string = `${this.BASE_URL}/todos`

  fetchArrData(): Observable<Itodos[]>{
  return this._httpClient.get<Itodos[]>(this.TODOS_URL)
  }

   fetchCompleted() : Observable<Itodos[]>{
     return this.fetchArrData()
     .pipe(
      map(arr => {
        let complatet = arr.filter(res => {
          return res.completed
        })
        return complatet
      })
     )
   }



fetchIncomplate():Observable<Itodos[]>{
  return this.fetchArrData()
  .pipe(
    map(arr => {
      let NotComplate = arr.filter(res => {
        return !res.completed
      })
      return NotComplate
    })
  )
}


  // getCompletedTodos() : Observable<Itodos[]>{
  //   return this.getodos()
  //  .pipe(
  //   map(arr => {
  //     let complateArr = arr.filter(t => {
  //       return t.completed
  //     })

  //     return complateArr
  //   })
  //  )
  // }

  // notcompolated(){
  //   return this.getodos().pipe(
  //     map(arr => {
  //      let notcomplate = arr.filter(n => {
  //       return !n.completed
  //      })
  //      return notcomplate
  //     })
  //   )
  // }
}
