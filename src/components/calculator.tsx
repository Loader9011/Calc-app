import React, { BaseSyntheticEvent, KeyboardEvent, MouseEventHandler, useEffect, useState } from 'react'
import {Wrapper, DisplayWrapper, Grid, CalcButton} from './calculatorStyles/calcComponentStyle'
import Display from './display'
import { Backspace, handleKeyDown } from '../assets/keyboard'

type Props = {
  children: React.ReactNode,
}



export default function Calculator({children}: Props ) {
  const [value, setValue] = useState("")
  const [firstValue, setfirstValue] = useState(0)
  const [secondValue, setSecondValue] = useState(0)
  const [result, setResult] = useState(0)
  const [resultArray, setResultArray] = useState([firstValue, secondValue])


  function Calculate(){
    const result = resultArray.reduce((next, number) => {
      return next + number
    }, 0)
    resultArray[0] = result
    resultArray[1] = 0
    console.log(resultArray)
    setResult(result)
  }
 
  const Plus = () => {
    if(!Number.isNaN(Number(value[value.length - 1]))){
      setValue(value + `+`)
      let number = Number(value.substring(0, value.length))
      console.log(number)
      setResult(resultArray[1] = number)
      Calculate()
    }
  }
  const Minus = () => {
    if(!Number.isNaN(Number(value[value.length - 1]))){
      setValue(value + `-`)
    }
  }
  const Multiply = () => {
    if(!Number.isNaN(Number(value[value.length - 1]))){
      setValue(value + `*`)
    }
  }
  const Divide = () => {
    if(!Number.isNaN(Number(value[value.length - 1]))){
      setValue(value + `/`)
    }
  }

  const Clear = () => {
    setValue("")
    setResultArray([0, 0])
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
      <Grid >
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
        <CalcButton onClick={Plus}>+</CalcButton>
        <CalcButton onClick={Minus}>-</CalcButton>
        <CalcButton onClick={Multiply}>*</CalcButton>
        <CalcButton onClick={Divide}>/</CalcButton>
        <CalcButton onClick={() => Backspace(value, setValue)}>d</CalcButton>
      </Grid>
        
    </Wrapper>
      
    </div>
  )
}