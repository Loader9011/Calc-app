import { keyboardKey } from "@testing-library/user-event"
import { BaseSyntheticEvent } from "react"
import { numbers } from "./constaints"
import { equal } from "assert"


export const Backspace = (value: string, setValue: Function): void => {
    setValue(value.substring(0, value.length - 1))
  } 

export const typeNumber = (e : BaseSyntheticEvent, setValue: Function, value: string, setOperationValue: Function, operationValue: string) => {
    setOperationValue(operationValue.concat(e.currentTarget.value))
    setValue(value.concat(e.currentTarget.value))
  }

export const handleKeyDown = (value: string, setValue: React.Dispatch<React.SetStateAction<string>>, Backspace: Function, event: KeyboardEvent) => {
    if (event.key === 'Backspace') {
     Backspace()
    }
  };

 
  export function isNumber(value: any){
    if(typeof value === 'number'){
      return value
    }
  }
    
  export function keyPressed (e: keyboardKey & any, value: string, setValue: Function, operationLine: string,  setOperationLine: Function) {
    const filtredNumbers = numbers.filter(isNumber)
    if(e.keyCode === 48) setOperationLine(operationLine.concat(String(e.key)))
    filtredNumbers.forEach((number: number) => {
        if(e.code == "shiftLeft" && "Equal"){
          e.preventDefault()
          console.log("PLUS")
        }
        if(Number(e.key) === number){
          setOperationLine(operationLine.concat(String(e.key)))
        }
        if(e.key === "Backspace"){
          Backspace(value, setValue)
        }
    });
  } 

