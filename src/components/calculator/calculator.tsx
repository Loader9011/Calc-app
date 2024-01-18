import React, {KeyboardEvent, useEffect, useState } from 'react'
import {Wrapper, DisplayWrapper, Grid, CalcBtn, FlexContainer, GrindOneColumn} from './calcComponentStyle'
import Display from '../display'
import { Backspace, keyPressed, typeNumber } from '../../assets/keyboard'
import { numbers, operations } from '../../assets/constaints'
import { calculator, Plus, Minus, Divide, Calculate, Multiply, Clear } from './calculatorFunctions'
import { LiaTimesSolid, LiaDivideSolid, LiaPlusSolid, LiaMinusSolid, LiaEqualsSolid, LiaBackspaceSolid } from "react-icons/lia";
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
    <div onKeyDown={
      (e: KeyboardEvent) => keyPressed(e, value, setValue, operationLine, setOperationLine)
    }>
    <Wrapper>
      <DisplayWrapper>
        <Display result={result} operationLine={operationLine}></Display>
      </DisplayWrapper>
      <FlexContainer>
        <Grid>
          <CalcBtn className='secondary' 
            onClick={() => Backspace(value, setValue)}>
            <LiaBackspaceSolid style={{height: '1.3em', width: '1.3em'}}/>
          </CalcBtn>
          <CalcBtn 
          onClick={() => setResult(calculator.clearValue())} className='secondary'>
            AC
          </CalcBtn>
          <CalcBtn 
          className='secondary'
            onClick={
              () => Clear(setValue, setOperationLine, setLastUsedOperation)
              }>
            C
          </CalcBtn>
          {numbers.filter(Number).map((number: number | string) => 
            <CalcBtn
              key={number}
              value={number} 
              onClick={(e) => typeNumber(e, setValue, value, setOperationLine, operationLine)}>
                {number.toString()}
            </CalcBtn>
          )}
          <CalcBtn 
            value={0} 
            onClick={(e) => typeNumber(e, setValue, value, setOperationLine, operationLine)}>
            0
          </CalcBtn>
        </Grid>
        <GrindOneColumn>
            <CalcBtn onClick={() => Divide(Number(value), setValue, operationLine, setOperationLine, lastUsedOperation, setLastUsedOperation)} className='secondary'>
              <LiaDivideSolid style={{height: '1.1em', width: '1.1em'}}/>
            </CalcBtn>
            <CalcBtn onClick={() => Multiply(Number(value), setValue, operationLine, setOperationLine, lastUsedOperation, setLastUsedOperation)} className='secondary'>
              <LiaTimesSolid/>
            </CalcBtn>
            <CalcBtn onClick={() => Minus(Number(value), setValue, operationLine, setOperationLine, lastUsedOperation, setLastUsedOperation)} className='secondary'>
              <LiaMinusSolid/>
            </CalcBtn>
            <CalcBtn onClick={() => Plus(Number(value), setValue, operationLine, setOperationLine, lastUsedOperation, setLastUsedOperation)} className='secondary'>
              <LiaPlusSolid/>
            </CalcBtn>
            <CalcBtn onClick={() => Calculate(lastUsedOperation, setValue, result, value)} className='secondary'><LiaEqualsSolid /></CalcBtn>
        </GrindOneColumn>
      </FlexContainer>
    </Wrapper>
    </div>
  )
}