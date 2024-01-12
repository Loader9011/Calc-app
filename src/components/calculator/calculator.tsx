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

  function isNumber(value: any){
    if(typeof value === 'number'){
      return value
    }
  }
 
  function keyPressed (e: keyboardKey) {
    const filtredNumbers = numbers.filter(isNumber)
    filtredNumbers.forEach((number: Number) => {
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
        <Display result={result} value={value}></Display>
      </DisplayWrapper>
      <FlexContainer>
        <Grid>
          <CalcBtn className='secondary'>ac</CalcBtn>
          <CalcBtn className='secondary' onClick={() => Backspace(value, setValue)}>del</CalcBtn>
          <CalcBtn className='secondary' onClick={() => setValue("")}>c</CalcBtn>
          {numbers.filter(Number).map((number: number | string) => 
            <CalcBtn
              value={number} 
              onClick={(e) => typeNumber(e, setValue, value)}>
                {number.toString()}
            </CalcBtn>
          )}
          <CalcBtn>0</CalcBtn>
        </Grid>
        <GrindOneColumn>
          {operationsBtn.map((operation: number | string) => 
            <CalcBtn className='secondary'>
              {operation.toString()}
            </CalcBtn>)}
        <CalcBtn className='secondary'>=</CalcBtn>
        </GrindOneColumn>
      </FlexContainer>
      <GrindOneColumn>
      </GrindOneColumn>
        
    </Wrapper>
      
    </div>
  )
}