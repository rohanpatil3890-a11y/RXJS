import { Component, OnInit } from '@angular/core';
import { UserNameService } from 'src/app/service/user-name.service';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.scss']
})
export class TwoComponent implements OnInit {

  constructor(private userName : UserNameService) { }

  userData !: string

  ngOnInit(): void {
    this.userName.userNameSubObs$.subscribe(res => {
     this.userData = res
    })
  }

}
