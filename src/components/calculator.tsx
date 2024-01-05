import React, { KeyboardEvent, MouseEventHandler, useState } from 'react'
import {Wrapper, DisplayWrapper, Grid, CalcButton} from './calculatorStyles/calcComponentStyle'
import Display from './display'
import { Backspace, handleKeyDown } from '../assets/keyboard'

type Props = {
  children: React.ReactNode,
}



export default function Calculator({children}: Props ) {
  const [value, setValue] = useState("")

  const event = {
    key: String
  }
  const Clear = () => {
  }
  
  const Calculate = () => {
  }
  const Plus = () => {
  }
  const Minus = () => {
  }

  Backspace(value, setValue)
  handleKeyDown(value, setValue, Backspace, event as any)
  
  return (
    <div>
    <Wrapper>
      <DisplayWrapper onKeyDown={handleKeyDown}>
        <Display value={value}></Display>
      </DisplayWrapper>
      <Grid >
        <CalcButton value={1} onClick={(e) => setValue(value.concat(e.currentTarget.value))}>1</CalcButton>
        <CalcButton value={2} onClick={(e) => setValue(value.concat(e.currentTarget.value))}>2</CalcButton>
        <CalcButton value={3} onClick={(e) => setValue(value.concat(e.currentTarget.value))}>3</CalcButton>
        <CalcButton value={4} onClick={(e) => setValue(value.concat(e.currentTarget.value))}>4</CalcButton>
        <CalcButton value={5} onClick={(e) => setValue(value.concat(e.currentTarget.value))}>5</CalcButton>
        <CalcButton value={6} onClick={(e) => setValue(value.concat(e.currentTarget.value))}>6</CalcButton>
        <CalcButton value={7} onClick={(e) => setValue(value.concat(e.currentTarget.value))}>7</CalcButton>
        <CalcButton value={8} onClick={(e) => setValue(value.concat(e.currentTarget.value))}>8</CalcButton>
        <CalcButton value={9} onClick={(e) => setValue(value.concat(e.currentTarget.value))}>9</CalcButton>
        <CalcButton value={0} onClick={(e) => setValue(value.concat(e.currentTarget.value))}>0</CalcButton>
        <CalcButton onClick={Clear}>C</CalcButton>
        <CalcButton onClick={Calculate}>=</CalcButton>
        <CalcButton onClick={Plus}>+</CalcButton>
        <CalcButton onClick={Minus}>-</CalcButton>
        <CalcButton onClick={Backspace(value, setValue)}>d</CalcButton>
      </Grid>
        
    </Wrapper>
      
    </div>
  )
}