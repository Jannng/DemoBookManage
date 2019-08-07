import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterAllComponent } from './counter-all/counter-all.component';
import { CounterKeyboardComponent } from './counter-keyboard/counter-keyboard.component';
import { CounterResultComponent } from './counter-result/counter-result.component';
import { CounterService } from './services/counter.service';



@NgModule({
  declarations: [CounterAllComponent, CounterKeyboardComponent, CounterResultComponent],
  imports: [
    CommonModule
  ],
  exports: [CounterAllComponent],
  providers: [CounterService]
})
export class CounterModule { }
