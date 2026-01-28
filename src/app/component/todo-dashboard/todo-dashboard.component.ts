import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/service/todo.service';
import { Itodo2 } from '../model/todo';
import { SnackBarService } from 'src/app/service/snack-bar.service';

@Component({
  selector: 'app-todo-dashboard',
  templateUrl: './todo-dashboard.component.html',
  styleUrls: ['./todo-dashboard.component.scss']
})
export class TodoDashboardComponent implements OnInit {

  constructor(private todoService : TodoService,
    private _snackBarService : SnackBarService
  ) { }

  TodoArr !: Itodo2[]

  ngOnInit(): void {

    this.todoService.fetchAllTodo()
    .subscribe({
      next : data => {
        console.log(data);
        this.TodoArr = data
        
      },
      error : err => {
        console.log(err);
        
      }
    })
    
  }

  NewTodoObj(todo : Itodo2){
    this.TodoArr.push(todo)
    this._snackBarService.snackBar(`The todo with id ${todo.todoId} id created successfully !!!`)
  }

  

}
