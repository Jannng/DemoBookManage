import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterAllComponent } from './counter-all/counter-all.component';
import { CounterKeyboardComponent } from './counter-keyboard/counter-keyboard.component';
import { CounterResultComponent } from './counter-result/counter-result.component';



@NgModule({
  declarations: [CounterAllComponent, CounterKeyboardComponent, CounterResultComponent],
  imports: [
    CommonModule
  ],
  exports: [CounterAllComponent]
})
export class CounterModule { }
