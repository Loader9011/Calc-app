import React, { BaseSyntheticEvent, Key, KeyboardEvent, MouseEventHandler, useEffect, useMemo, useState } from 'react'
import {Wrapper, DisplayWrapper, Grid, CalcBtn, FlexContainer, GrindOneColumn} from './calcComponentStyle'
import Display from '../display'
import { Backspace, handleKeyDown, keyPressed, typeNumber } from '../../assets/keyboard'
import { numbers, operations, operationsBtn } from '../../assets/constaints'
import { CommandCalculator } from './patternCommandCalculator'
import { keyboardKey } from '@testing-library/user-event'
import { calculator, Plus, Minus, Divide, Calculate, Multiply, Clear } from './calculatorFunctions'

type Props = {
  children: React.ReactNode,
}



export default function Calculator({children}: Props ) {
  const [result, setResult] = useState(0)
  const [value, setValue] = useState("")
  const [operationLine, setOperationLine] = useState("")
  const [lastUsedOperation, setLastUsedOperation] = useState(operations.add)
  
  useEffect(() => {
    setResult(calculator.getValue())
  }, [value, operationLine])


  return (
    <div onKeyDown={(e: KeyboardEvent) => keyPressed(e, value, setValue, operationLine, setOperationLine)}>
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
            <CalcBtn onClick={() => Divide(Number(value), setValue, operationLine, setOperationLine, lastUsedOperation, setLastUsedOperation)} className='secondary'>/</CalcBtn>
            <CalcBtn onClick={() => Multiply(Number(value), setValue, operationLine, setOperationLine, lastUsedOperation, setLastUsedOperation)} className='secondary'>*</CalcBtn>
            <CalcBtn onClick={() => Minus(Number(value), setValue, operationLine, setOperationLine, lastUsedOperation, setLastUsedOperation)} className='secondary'>-</CalcBtn>
            <CalcBtn onClick={() => Plus(Number(value), setValue, operationLine, setOperationLine, lastUsedOperation, setLastUsedOperation)} className='secondary'>+</CalcBtn>
            <CalcBtn onClick={() => Calculate(lastUsedOperation, setValue, result, value)} className='secondary'>=</CalcBtn>
        </GrindOneColumn>
      </FlexContainer>
      <GrindOneColumn>
      </GrindOneColumn>
        
    </Wrapper>
      
    </div>
  )
}