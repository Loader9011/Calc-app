import React, { BaseSyntheticEvent, Key, KeyboardEvent, MouseEventHandler, useEffect, useState } from 'react'
import {Wrapper, DisplayWrapper, Grid, CalcButton, CalcContainer, CalcBtn, FlexContainer, GrindOneColumn} from './calcComponentStyle'
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
          <CalcBtn>ac</CalcBtn>
          <CalcBtn>del</CalcBtn>
          <CalcBtn>0</CalcBtn>
          {numbers.filter(Number).map((number: number | string) => 
            <CalcBtn
              value={number} 
              onClick={(e) => typeNumber(e, setValue, value)}>
                {number.toString()}
            </CalcBtn>
          )}
        </Grid>
        <GrindOneColumn>
          {operationsBtn.map((operation: number | string) => 
            <CalcBtn>
              {operation.toString()}
            </CalcBtn>)}
        </GrindOneColumn>
      </FlexContainer>
      <GrindOneColumn style={{justifyContent: 'right', display: 'flex', margin: 0, maxWidth: 274}}>
        <CalcBtn>=</CalcBtn>
      </GrindOneColumn>
        
    </Wrapper>
      
    </div>
  )
}