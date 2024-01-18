import { operations, operationsBtn } from "../../assets/constaints";
import { CommandCalculator } from "./patternCommandCalculator";

const calculator = new CommandCalculator();

const GetLastChar = (operationLine: string) => {
  let result = true;
  let stringLength = operationLine.length
  let lastChar = operationLine.substring(stringLength - 2).replace(" ", '')
  operationsBtn.map((elem: string) => {
    if(elem === lastChar){
      result = false
    }
  })
  return result
}

const Calculate = (lastUsedOperation: string, setValue: Function, result: number, value: string) => {
  setValue("")
  calculator.execute(lastUsedOperation, Number(value))
  console.log(calculator.actions)
}
const Clear = (setValue: Function, setOperationLine: Function) => {
  setValue("")
  setOperationLine("")
}

const Plus = (result: number, setValue: Function, operationLine: string, setOperationLine: Function, lastUsedOperation: string, setLastUsedOperation: Function) => {
  if(GetLastChar(operationLine)){
    setValue("")
    setLastUsedOperation(operations.add)
    setOperationLine(operationLine + " + " )
    calculator.execute(lastUsedOperation, result)
  }
}
const Minus = (result: number, setValue: Function, operationLine: string, setOperationLine: Function, lastUsedOperation: string, setLastUsedOperation: Function) => {
  if(GetLastChar(operationLine)){
    setValue("")
    setLastUsedOperation(operations.minus)
    setOperationLine(operationLine + " - " )
    calculator.execute(lastUsedOperation, result)
  }
}
const Multiply = (result: number, setValue: Function, operationLine: string, setOperationLine: Function, lastUsedOperation: string, setLastUsedOperation: Function) => {
  if(GetLastChar(operationLine)){
    setValue("")
    setOperationLine(operationLine + " * " )
    setLastUsedOperation(operations.multiply)
    calculator.execute(lastUsedOperation, result)
  }
}
const Divide = (result: number, setValue: Function, operationLine: string, setOperationLine: Function, lastUsedOperation: string, setLastUsedOperation: Function) => {
  if(GetLastChar(operationLine)){
    setValue("")
    setOperationLine(operationLine + " / " )
    setLastUsedOperation(operations.divide)
    calculator.execute(lastUsedOperation, result)
  }
}


export {calculator, Plus, Minus, Divide, Calculate, Multiply, Clear}