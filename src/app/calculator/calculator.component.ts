import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  firstNumber: any;
  secondNumber: any;
  // sum: any;
  // difference: any;
  // product: any;
  // quotient: any;

  result: any;

  outFunctionParent1(data: any) {
    this.result = data;
  }


  outFunctionParent2(data: any) {
    this.result = data;
  }


  outFunctionParent3(data: any) {
    this.result = data;
  }


  outFunctionParent4(data: any) {
    this.result = data;
  }

}
