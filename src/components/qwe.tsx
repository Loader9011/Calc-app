import React from 'react'

interface romanType {
    [command: number]: object;
  }
  class CommandCalculator {
    actions: romanType = []
    actionIndex: number
    constructor() {
        this.actions = [];
        this.actionIndex = 0;
    }

    add(a: number, b: number) {
        return a + b;
    }

    multiply(a: number, b: number) {
        return a * b;
    }

    execute(command: string, args: number) {
        this.actions[this.actionIndex] = { command, args } as any
        this.actionIndex++;
    }
    getValue() {
        let value = 0;
        console.log("123")
        return value
    }
  }


  

export default function Qwe() {
    const calculator = new CommandCalculator();
    calculator.execute("add", 5);
    
    calculator.execute("multiply", 10);
    
    calculator.execute("add", 2);

    calculator.execute("add", 3);

    let result = calculator.getValue()
  return (
    <div>{result}</div>
  )
}