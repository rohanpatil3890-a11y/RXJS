import { Component, OnInit } from '@angular/core';
import { TodosService } from 'src/app/service/todos.service';
import { Itodos } from '../model/todos';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.scss']
})
export class CompletedComponent implements OnInit {

  constructor(private _todoservice : TodosService) { }

  todoArr : Array<Itodos> = []

  ngOnInit(): void {


    this._todoservice.fetchCompleted()
    .subscribe(res => {
      console.log(res);
       this.todoArr = res
    })
    
  }

}
