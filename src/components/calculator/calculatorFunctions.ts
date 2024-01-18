import { operations } from "../../assets/constaints";
import { CommandCalculator } from "./patternCommandCalculator";

const calculator = new CommandCalculator();
const Plus = (result: number, setValue: Function, operationLine: string, setOperationLine: Function, setLastUsedOperation: Function) => {
  setValue("")
  setLastUsedOperation(operations.add)
  setOperationLine(operationLine + " + " )
  calculator.execute(operations.add, result)
  console.log(result)
}
const Minus = (result: number, setValue: Function, operationLine: string, setOperationLine: Function, setLastUsedOperation: Function) => {
  setLastUsedOperation(operations.minus)
  calculator.execute(operations.minus, result)
  setValue("")
  setOperationLine(operationLine + " - " )
  console.log(result)
}
const Multiply = (result: number, setValue: Function, operationLine: string, setOperationLine: Function, setLastUsedOperation: Function) => {
  setValue("")
  setOperationLine(operationLine + " * " )
  calculator.execute(operations.multiply, result)
  console.log(result)
  setLastUsedOperation(operations.multiply)
}
const Divide = (result: number, setValue: Function, operationLine: string, setOperationLine: Function, setLastUsedOperation: Function) => {
  setValue("")
  setOperationLine(operationLine + " / " )
  calculator.execute(operations.divide, result)
  console.log(result)
  setLastUsedOperation(operations.divide)
}
const Calculate = (lastUsedOperation: string, setValue: Function, result: number, value: string) => {
  setValue("")
  calculator.execute(lastUsedOperation, Number(value))
  console.log(value)
  console.log(calculator.actions)
}
const Clear = (setValue: Function, setOperationLine: Function) => {
  setValue("")
  setOperationLine("")
}

export {calculator, Plus, Minus, Divide, Calculate, Multiply, Clear}