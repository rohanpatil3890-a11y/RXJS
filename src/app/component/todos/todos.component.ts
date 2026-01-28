import { Component, OnInit } from '@angular/core';
import { OfService } from 'src/app/service/of.service';
import { TodosService } from 'src/app/service/todos.service';
import { Itodos } from '../model/todos';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  constructor(private _todoservice : TodosService) { }

  todoArr !: Array<Itodos>

  ngOnInit(): void {

    this._todoservice.fetchArrData()
    .subscribe(res => {
      console.log(res);
      this.todoArr = res
      
    })

  }

  trackById (index : number, todo : Itodos){
    return todo.id
  }

}
