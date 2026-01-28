import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Itodo2 } from '../model/todo';
import { UuidService } from 'src/app/service/uuid.service';
import { TodoService } from 'src/app/service/todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {

  constructor(private _UuidSevice : UuidService,
    private todoService : TodoService
  ) { }

  EditId !: string

  isinEditMode : boolean = false

  ngOnInit(): void {

    this.EditedObj()

  }
  @Output() newTodoObj : EventEmitter<Itodo2> = new EventEmitter<Itodo2>() 
   @ViewChild('todoForm') todoForm !: NgForm;

EditedObj(){
   this.todoService.EditedObj$.subscribe({
      next : data => {
        console.log(data);
        this.EditId = data.todoId
        this.todoForm.form.patchValue(data)
        this.isinEditMode = true;
        
      },
      error : err => {
        console.log(err);
        
      }
    })
}

  AddNewTodo(){
    if(this.todoForm.valid){
      let Obj : Itodo2 = {
        ...this.todoForm.value,
        todoId : this._UuidSevice.uuid()
      }

      this.todoService.creatNewTodo(Obj)
      .subscribe({
        next : data => {

          this.newTodoObj.emit(data)
          this.todoForm.reset()
          
        },
        error : err => {
          console.log(err);
          
        }
      })

    }
  }

  onUpdate(){
    if(this.todoForm.valid){
      let UPDATE_OBJ : Itodo2 = {
        ...this.todoForm.value,
        todoId : this.EditId
      }
      this.todoService.updateTodo(UPDATE_OBJ)
      this.todoForm.reset();
      this.isinEditMode = false
    }
  }

}
