import { Component, OnInit } from '@angular/core';
import { UserNameService } from 'src/app/service/user-name.service';

@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.scss']
})
export class ThreeComponent implements OnInit {

  constructor(private username : UserNameService) { }

  userData !: string

  ngOnInit(): void {

    this.username.userNameSubObs$.subscribe(res =>{
      this.userData = res
    })
  }

}
