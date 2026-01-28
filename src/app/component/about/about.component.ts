import { Component, OnInit } from '@angular/core';
import { OfService } from 'src/app/service/of.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private _ofService: OfService) { }

  eventNumArr : Array<string> = []

  ngOnInit(): void {



    this._ofService.ofEvent.subscribe(res => {

      this.eventNumArr.push(res)


    })




















    // console.log('Even No');
    // this._ofService.ofEvent$
    //   .subscribe(res => {
    //     console.log(res);

    //   })
    //  console.log('divisable No 3 & 5');
    // this._ofService.ofDivisible$
    //   .subscribe(res => {
    //     console.log(res);

    //   })
    //   console.log('Odd No');
    //   this._ofService.ofOdd$
    //   .subscribe(res => {
    //     console.log(res);

    //   })

    //    console.log('Prime No');
    //    this._ofService.OfPrime$
    //    .subscribe(res => {
    //     console.log(`${res} is prime no`);

    //    })

    //    this._ofService.Palindrome$
    //    .subscribe(res => {
    //     console.log(`${res} is palidrom`);

    //    })
  }

}
