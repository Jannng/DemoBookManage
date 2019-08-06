import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter-all',
  templateUrl: './counter-all.component.html',
  styleUrls: ['./counter-all.component.css']
})
export class CounterAllComponent implements OnInit {
  expression:string = '';
  constructor() { }

  ngOnInit() {
  }

  getExp(expression: string){
    this.expression = expression;
  }

}
