import React from 'react'



export default function PatterCommand() {

  class CommandCalculator {
    constructor() {
      this.actions = [];
      this.actionIndex = 0;
    }
  
    add(a, b) {
      return a + b;
    }
    
  
    multiply(a, b) {
      return a * b;
    }
  
    execute(command, args) {
      this.actions[this.actionIndex] = { command, args}
      this.actionIndex++;
    }
  
    undo() {
      if(this.actionIndex > 0 ) {
        this.actionIndex--;
      }
    }
  
    getValue() {
      let value = 0;
  
      for(let i = 0; i < this.actionIndex; ++i) {
        const { command, args} = this.actions[i];
        console.log(this[command](value,args)) 
        if(this[command]) {
          value = this[command](value, args)
        }
      }
  
  
      return value;
  
    }
  }
  
  
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