import { operations } from "../../assets/constaints";

interface romanType {
    [index: number]: object;
  }
  
  export class CommandCalculator {
    actions: romanType = []
    actionIndex: number
    constructor() {
        this.actions = [];
        this.actionIndex = 0;
    }
  
    add(a: number, b: number) {
        return a + b;
    }
  
    minus(a: number, b: number) {
      return a - b;
    }
  
    multiply(a: number, b: number) {
        return a * b;
    }
  
    divide(a: number, b: number) {
      return a / b;
    }
  
    execute(command: string, args: number) {
        this.actions[this.actionIndex] = { command, args } as any
        this.actionIndex++;
    }
    getValue() {
        let value = 0;
        let func: Function
        for(let i = 0; i < this.actionIndex; ++i) {
          const { command, args }: any = this.actions[i];
          if(this[command as keyof typeof this.actions[typeof i]]) {
            func = this[command as keyof typeof this.actions[typeof i]]
            value = func(value, args)
          }
        }
        return value
    }
    clearValue(){
      this.actionIndex = 0
      let value = 0
      return value
    }
}
  