import { Injectable } from '@angular/core';
import { Itodo2 } from '../component/model/todo';
import { Observable, of, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  todoArr : Array<Itodo2> = [
    {
      todoItem : "JS",
      todoId : "123"
    },
    {
      todoItem : "TS",
      todoId : "124"
    },
    {
      todoItem : "Angular",
      todoId : "125"
    }
  ]


  EditedObj$ : Subject<Itodo2> = new Subject<Itodo2>();

  fetchAllTodo() : Observable<Itodo2[]>{
    return of (this.todoArr)
  }

  creatNewTodo(todo : Itodo2) : Observable<Itodo2>{
    return of (todo)
  }

  removeTodo(id : string){
    let getIndex = this.todoArr.findIndex(p => p.todoId === id);
   let todos = this.todoArr.splice(getIndex,1)
     return of (todos[0])
  }

  updateTodo(todo : Itodo2){
    let getIndex = this.todoArr.findIndex(t => t.todoId === todo.todoId);

    this.todoArr[getIndex] = todo
  }

  
}
