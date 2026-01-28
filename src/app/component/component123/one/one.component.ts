import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserNameService } from 'src/app/service/user-name.service';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.scss']
})
export class OneComponent implements OnInit {

  constructor(private userName: UserNameService) { }

  firstVal!: string


  ngOnInit(): void {
  }

  @ViewChild('formSignUp') formSignUp !: NgForm


  onAddusername() {
    if (this.formSignUp.valid) {
      let obj = {
        ...this.formSignUp.value
      }
      this.userName.setData(obj.username)
      this.formSignUp.reset()
      this.firstVal = obj.username
    }
  }

}
