import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-counter-keyboard',
  templateUrl: './counter-keyboard.component.html',
  styleUrls: ['./counter-keyboard.component.css']
})
export class CounterKeyboardComponent implements OnInit {
  
  expression: string = '';

  @Output() inputNumber = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  input(char) {
    this.expression += char;
    this.inputNumber.emit(this.expression);
  }

  clear(){
    this.expression = "";
    this.inputNumber.emit(this.expression);
  }
}
