import { Component, OnInit } from '@angular/core';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-counter-all',
  templateUrl: './counter-all.component.html',
  styleUrls: ['./counter-all.component.css']
})
export class CounterAllComponent implements OnInit {
  expression:string = '';

  result:string;

  constructor(private counterSvc:CounterService) {
    
  }

  ngOnInit() {
  }

  getExp(expression: string){
    this.expression = expression;
  }

  getResult(){
    this.result = this.counterSvc.toReversePolish(this.expression);
  }

}
