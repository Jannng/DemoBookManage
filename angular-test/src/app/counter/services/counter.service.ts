import { Stack } from "../entities/Stack";

export class CounterService {
  constructor() {}
  toReversePolish(expression: string): string {
    let len = expression.length;
    let char: string, tempchar: string;
    let s1 = new Stack<string>();
    let s2 = new Stack<number>();
    for (let i: number = 0; i < len; i++) {
      char = expression[i];
      if (this.isOperator(char)) {
        while (
          !s1.empty() &&
          s1.peek() != "(" &&
          this.priorityCompare(char, s1.peek()) <= 0
        ) {
          let num1 = +s2.pop();
          let num2 = +s2.pop();
          s2.push(this.calc(num2, num1, s1.pop()));
        }
        s1.push(char);
      } else if (char == "(") {
        s1.push(char);
      } else if (char == ")") {
        while ((tempchar = s1.pop()) != "(") {
          let num1 = +s2.pop();
          let num2 = +s2.pop();
          s2.push(this.calc(num2, num1, tempchar));
        }
      } else {
        let num: string = "";
        while (
          expression[i] != "(" &&
          expression[i] != ")" &&
          expression[i] != "+" &&
          expression[i] != "-" &&
          expression[i] != "*" &&
          expression[i] != "/"
        ) {
          num += expression[i++];
          if (i == expression.length) {
            break;
          }
        }
        s2.push(+num);
        i--;
      }
    }
    while (!s1.empty()) {
      tempchar = s1.pop();
      let num1 = +s2.pop();
      let num2 = +s2.pop();
      s2.push(this.calc(num2, num1, tempchar));
    }
    let result: number = s2.pop();
    return result.toString();
  }

  private isOperator(c: string): boolean {
    return c == "+" || c == "-" || c == "*" || c == "/";
  }

  private priorityCompare(c1: string, c2: string) {
    switch (c1) {
      case "+":
      case "-":
        return c2 == "*" || c2 == "/" ? -1 : 0;
      case "*":
      case "/":
        return c2 == "+" || c2 == "-" ? 1 : 0;
    }
    return 1;
  }

  private calc(num1: number, num2: number, op: string): number {
    switch (op) {
      case "+":
        return num1 + num2;
      case "-":
        return num1 - num2;
      case "*":
        return num1 * num2;
      case "/":
        return num1 / num2;
    }
  }
}
