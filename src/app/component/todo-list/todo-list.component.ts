import { Component, Input, OnInit } from '@angular/core';
import { Itodo2 } from '../model/todo';
import { TodoService } from 'src/app/service/todo.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { GetConformComponent } from '../get-conform/get-conform.component';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  constructor(private _todoService: TodoService,
    private _matDilog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  @Input() TodoArr !: Array<Itodo2>

  trackById(index: number, todo: Itodo2) {
    return todo.todoId
  }

  onRemove(id: string) {

    let config = new MatDialogConfig()
    config.disableClose = true;
    config.data = `Are you sure, you want to remove todo with id ${id}`;

    let matDilogRef = this._matDilog.open(GetConformComponent, config)

    matDilogRef.afterClosed().subscribe(flag => {
      if (flag) {
        this._todoService.removeTodo(id)
          .subscribe({
            next: data => {
              console.log(data);

            },
            error: err => {
              console.log(err);

            }
          })
      }
    })

  }

  EditedObj(todo: Itodo2) {
    this._todoService.EditedObj$.next(todo)
  }



}
