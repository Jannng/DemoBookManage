import { Stack } from "../entities/Stack";

export class CounterService {
  constructor() {}

  calculate(expression: any) {
    let number = new Stack<number>();
    let operator = new Stack<string>();
    let char: any;
    for(char in expression){
        console.log(char);
    }
  }
}

let service = new CounterService();
service.calculate("12qwe++");
