export class Stack<T>{
    data: T[];

    pop(){
        return this.data.pop;
    }

    push(element: T){
        this.data.push;
    }

    isEmpty(){
        return this.data.length == 0;
    }
}