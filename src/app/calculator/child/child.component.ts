
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {


  @Input()
    firstNumber: any;

  @Input()
    secondNumber: any;

  @Input()
    total: any;
    sub: any;
    multiply: any;
    divide: any;


  @Output()
   outFunction = new EventEmitter<number>();
    //  sum: any;
    //  difference: any;
    //  product: any;
    //  quotient: any;

  constructor() { }

  ngOnInit(): void {
  }


  getSum(){
    const sum = this.firstNumber + this.secondNumber;
    this.outFunction.emit(sum)
  }

  getDifference() {
    const difference = this.firstNumber - this.secondNumber;
    this.outFunction.emit(difference)
  }

  getProduct(){
    const product = this.firstNumber * this.secondNumber;
    this.outFunction.emit(product)
  }

  getQuotient(){
    const quotient = this.firstNumber / this.secondNumber;
    this.outFunction.emit(quotient)
  }
}
