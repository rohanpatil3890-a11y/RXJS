import { Injectable } from '@angular/core';
import { filter, map, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OfService {

  constructor() { }

  of$: Observable<number> = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30);

   
ofEvent = this.of$.pipe(
  filter(num => num % 2 ===0),
  map(res => {
    return `the value is even = ${res}`
  })
)


   
ofOdd$ = this.of$.pipe(
  filter(num => num % 2 != 0),
  map(res => {
    return `the value is odd =  ${res}`
  })
)


ofDivisible$ = this.of$.pipe(
  filter(num => num % 3 ===0 && num%5 ===0),
  map(res => {
    return `the value is divisable 3 and 5 = ${res}`
  })
)

  isPrime(n : number) : boolean {
    if (n <= 1) return false;

    for (let i = 2; i * i <= n; i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }


    OfPrime$ = this.of$.pipe(
    filter(num => this.isPrime(num)),
    map(res => {
      return `It is ${res} prime number`
    })
  )
























//   isPalindrome(n: number): boolean {
//   const rev = n.toString().split('').reverse().join('');
//   return n.toString() === rev;
// }




  // ofEvent$ = this.of$.pipe(
  //   filter(num => {
  //     return num % 2 === 0
  //   })

  // )

  // ofDivisible$ = this.of$.pipe(
  //   filter(num => {
  //     return num % 3 === 0 && num % 5 === 0
  //   })
  // )

  // ofOdd$ = this.of$.pipe(
  //   filter(num => {
  //     return num % 2 != 0
  //   })
  // )



//   Palindrome$ = this.of$.pipe(
//   filter(n => this.isPalindrome(n))
  
// );


}
