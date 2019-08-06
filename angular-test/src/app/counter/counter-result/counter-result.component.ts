import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-counter-result',
  templateUrl: './counter-result.component.html',
  styleUrls: ['./counter-result.component.css']
})
export class CounterResultComponent implements OnInit {

  @Input() expression: string = '';

  constructor() { }

  ngOnInit() {
  }

}
