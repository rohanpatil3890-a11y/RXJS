import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserNameService } from './service/user-name.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'RXJS';

  constructor(private userService : UserNameService){}


  @ViewChild('userNameForm') userNameForm !: NgForm

  OnAdd(){
     if(this.userNameForm.valid){
      let val = this.userNameForm.value;

      this.userNameForm.reset()
     this.userService.userName$.next(val)
     }
  }
}
