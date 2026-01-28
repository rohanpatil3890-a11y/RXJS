import { Component, OnDestroy, OnInit } from '@angular/core';

import { interval } from 'rxjs/internal/observable/interval';
import { Subscription } from 'rxjs/internal/Subscription';
import { OfService } from 'src/app/service/of.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  constructor(private ofService : OfService) { }

  interSub !: Subscription

  eventNumArr : Array<string> = []
  divisable : Array<string> = []

  oddArr : Array<string> = []
 prime : Array<string> = []


  ngOnInit(): void {

this.ofService.ofEvent.subscribe(res => {
  
   this.eventNumArr.push(res)
   
   
})

this.ofService.ofOdd$.subscribe(res => {
  
   this.oddArr.push(res)
   
   
})

this.ofService.ofDivisible$.subscribe(res => {
  this.divisable.push(res)
})


this.ofService.OfPrime$.subscribe(res =>{
this.prime.push(res)
})










    
//     console.log('Even No');
//     this.ofService.ofEvent$
//     .subscribe(res => {
//       console.log(res);
      
//     })
// console.log('divisable No 3 & 5');
//     this.ofService.ofDivisible$
//     .subscribe(res => {
//       console.log(res);
      
//     })
// console.log('Odd No');
//     this.ofService.ofOdd$
//     .subscribe(res => {
//       console.log(res);
      
//     })

  //  this.interSub = interval(1000)
  //   .subscribe((num : number) => {
  //      console.log(num)
  //   })

  
  }

  ngOnDestroy(): void {
      // this.interSub.unsubscribe()
  }

}
