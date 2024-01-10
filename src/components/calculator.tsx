import React, { BaseSyntheticEvent, Key, KeyboardEvent, MouseEventHandler, useEffect, useState } from 'react'
import {Wrapper, DisplayWrapper, Grid, CalcButton} from './calculatorStyles/calcComponentStyle'
import Display from './display'
import { Backspace, handleKeyDown } from '../assets/keyboard'
import { getValue } from '@testing-library/user-event/dist/utils'

type Props = {
  children: React.ReactNode,
}
interface romanType {
  [index: number]: object;
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
  }

  const operations = {
    add: "add",
    minus: "minus",
    multiply: "multiply",
    divide: "divide"
  }

  const calculator = new CommandCalculator();
  let result = 0;
  const Plus = (result: number, setValue: Function) => {
    setValue("")
    calculator.execute(operations.add, result)
    console.log(result)
  }
  const Minus = (result: number, setValue: Function) => {
    setValue("")
    calculator.execute(operations.minus, result)
    console.log(result)
    setValue("")
  }
  const Multiply = (result: number, setValue: Function) => {
    setValue("")
    calculator.execute(operations.multiply, result)
    console.log(result)
  }
  const Divide = (result: number, setValue: Function) => {
    setValue("")
    calculator.execute(operations.divide, result)
    console.log(result)
  }

export default function Calculator({children}: Props ) {
  const [value, setValue] = useState("")
  
  useEffect(() => {
    result = calculator.getValue()
  }, [value, result])


  function Calculate(){ 
    result = calculator.getValue()
    setValue(String(result))
  }

  const Clear = () => {
    setValue("")
  }
  
  
  const typeNumber = (e : BaseSyntheticEvent) => {
    setValue(value.concat(e.currentTarget.value))
  }

  return (
    <div>
    <Wrapper>
      <DisplayWrapper onKeyDown={(e: KeyboardEvent) => handleKeyDown(value, setValue, Backspace, e as any)}>
        <Display result={result} value={value}></Display>
      </DisplayWrapper>
      <Grid>
        <CalcButton value={1} onClick={(e) => typeNumber(e)}>1</CalcButton>
        <CalcButton value={2} onClick={(e) => typeNumber(e)}>2</CalcButton>
        <CalcButton value={3} onClick={(e) => typeNumber(e)}>3</CalcButton>
        <CalcButton value={4} onClick={(e) => typeNumber(e)}>4</CalcButton>
        <CalcButton value={5} onClick={(e) => typeNumber(e)}>5</CalcButton>
        <CalcButton value={6} onClick={(e) => typeNumber(e)}>6</CalcButton>
        <CalcButton value={7} onClick={(e) => typeNumber(e)}>7</CalcButton>
        <CalcButton value={8} onClick={(e) => typeNumber(e)}>8</CalcButton>
        <CalcButton value={9} onClick={(e) => typeNumber(e)}>9</CalcButton>
        <CalcButton value={0} onClick={(e) => typeNumber(e)}>0</CalcButton>
        <CalcButton onClick={Clear}>C</CalcButton>
        <CalcButton onClick={Calculate}>=</CalcButton>
        <CalcButton value={"+"} onClick={() => Plus(Number(value), setValue)}>+</CalcButton>
        <CalcButton onClick={() => Minus(Number(value), setValue)}>-</CalcButton>
        <CalcButton onClick={() => Multiply(Number(value), setValue)}>*</CalcButton>
        <CalcButton onClick={() => Divide(Number(value), setValue)}>/</CalcButton>
        <CalcButton onClick={() => Backspace(value, setValue)}>d</CalcButton>
      </Grid>
        
    </Wrapper>
      
    </div>
  )
}