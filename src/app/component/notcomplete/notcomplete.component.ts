import { Component, OnInit } from '@angular/core';
import { TodosService } from 'src/app/service/todos.service';
import { Itodos } from '../model/todos';

@Component({
  selector: 'app-notcomplete',
  templateUrl: './notcomplete.component.html',
  styleUrls: ['./notcomplete.component.scss']
})
export class NotcompleteComponent implements OnInit {

  constructor(private _todosservice : TodosService) { }

  notcompleteArr !: Array<Itodos>

  ngOnInit(): void {


   this._todosservice.fetchIncomplate()
   .subscribe(res => {
    this.notcompleteArr = res
   })



    

    // this._todosservice.notcompolated()
    // .subscribe({
    //   next : data => {
       
    //     this.notcompleteArr = data
        
    //   },
    //   error : err =>{
    //     console.log(err);
        
    //   }
    // })
  }



}
