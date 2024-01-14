import React, { BaseSyntheticEvent, Key, KeyboardEvent, MouseEventHandler, useEffect, useState } from 'react'
import {Wrapper, DisplayWrapper, Grid, CalcBtn, FlexContainer, GrindOneColumn} from './calcComponentStyle'
import Display from '../display'
import { Backspace, handleKeyDown, typeNumber } from '../../assets/keyboard'
import { numbers, operations, operationsBtn } from '../../assets/constaints'
import { CommandCalculator } from './patternCommandCalculator'
import { keyboardKey } from '@testing-library/user-event'

type Props = {
  children: React.ReactNode,
}

const calculator = new CommandCalculator();
const Plus = (result: number, setValue: Function, operationLine: string, setOperationLine: Function) => {
  setValue("")
  setOperationLine(operationLine + " + " )
  calculator.execute(operations.add, result)
  console.log(result)
}
const Minus = (result: number, setValue: Function, operationLine: string, setOperationLine: Function) => {
  setValue("")
  setOperationLine(operationLine + " - " )
  calculator.execute(operations.minus, result)
  console.log(result)
}
const Multiply = (result: number, setValue: Function, operationLine: string, setOperationLine: Function) => {
  setValue("")
  setOperationLine(operationLine + " * " )
  calculator.execute(operations.multiply, result)
  console.log(result)
}
const Divide = (result: number, setValue: Function, operationLine: string, setOperationLine: Function) => {
  setValue("")
  setOperationLine(operationLine + " / " )
  calculator.execute(operations.divide, result)
  console.log(result)
}
const Clear = (setValue: Function, setOperationLine: Function) => {
  setValue("")
  setOperationLine("")
}

export default function Calculator({children}: Props ) {
  const [result, setResult] = useState(0)
  const [value, setValue] = useState("")
  const [operationLine, setOperationLine] = useState("")
  
  useEffect(() => {
    setResult(calculator.getValue())
  }, [value])

  function isNumber(value: any){
    if(typeof value === 'number'){
      return value
    }
  }
 
  function keyPressed (e: keyboardKey) {
    const filtredNumbers = numbers.filter(isNumber)
    if(e.keyCode === 48) setValue(value.concat("0"))
    filtredNumbers.forEach((number: number) => {
        if(Number(e.key) === number){
          setValue(value.concat(String(number)))
        }
        if(e.key === "Backspace"){
          Backspace(value, setValue)
        }
    });
  }

  return (
    <div onKeyDown={(e: KeyboardEvent) => keyPressed(e)}>
    <Wrapper>
      <DisplayWrapper>
        <Display result={result} operationLine={operationLine}></Display>
      </DisplayWrapper>
      <FlexContainer>
        <Grid>
          <CalcBtn onClick={() => setResult(calculator.clearValue())} className='secondary'>ac</CalcBtn>
          <CalcBtn className='secondary' onClick={() => Backspace(value, setValue)}>del</CalcBtn>
          <CalcBtn className='secondary' onClick={() => Clear(setValue, setOperationLine)}>c</CalcBtn>
          {numbers.filter(Number).map((number: number | string) => 
            <CalcBtn
              key={number}
              value={number} 
              onClick={(e) => typeNumber(e, setValue, value, setOperationLine, operationLine)}>
                {number.toString()}
            </CalcBtn>
          )}
          <CalcBtn value={0} onClick={(e) => typeNumber(e, setValue, value, setOperationLine, operationLine)}>0</CalcBtn>
        </Grid>
        <GrindOneColumn>
            <CalcBtn onClick={() => Divide(Number(value), setValue, operationLine, setOperationLine)} className='secondary'>/</CalcBtn>
            <CalcBtn onClick={() => Multiply(Number(value), setValue, operationLine, setOperationLine)} className='secondary'>*</CalcBtn>
            <CalcBtn onClick={() => Minus(Number(value), setValue, operationLine, setOperationLine)} className='secondary'>-</CalcBtn>
            <CalcBtn onClick={() => Plus(Number(value), setValue, operationLine, setOperationLine)} className='secondary'>+</CalcBtn>
            <CalcBtn onClick={() => setResult(calculator.getValue())} className='secondary'>=</CalcBtn>
        </GrindOneColumn>
      </FlexContainer>
      <GrindOneColumn>
      </GrindOneColumn>
        
    </Wrapper>
      
    </div>
  )
}