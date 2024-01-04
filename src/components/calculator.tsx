import React, { KeyboardEvent, useState } from 'react'
import styled from 'styled-components'
import Display from './display'
import { numbers } from '../assets/keyboard'

type Props = {
  children: React.ReactNode,
}

const Wrapper = styled.div`
width: fit-content;
margin: 100px auto 0;
height: 100%;
display: flex;
flex-direction: column;
gap: 15px;
`

const DisplayWrapper = styled.div`
  font-size: 18px;
  word-wrap: normal;
  min-height: 22px;
`

const Grid = styled.div`
display: grid;
gap: 10px 13px;
grid-template-columns: repeat(4, 1fr);
`

const CalcButton = styled.button`
  font-size: 24px;
  cursor: pointer;
  border-radius: 50%;
  padding: 13px 20px;
  border:none;
  &:hover{
    opacity: 0.6;
  }
`


export default function Calculator({children}: Props ) {
  const [value, setValue] = useState("")
  const [addValue, setAddValue] = useState(Number)
  const [minusValue, setMinusValue] = useState(Number)
  const [array,setArray] = useState<number[]>([Number(value)]);
  const [usedValuesArray, SetUsedValuesArray] = useState<number[]>([Number(value)]);


  const Clear = () => {
    setValue("")
    setAddValue(Number())
    setMinusValue(Number())
    setArray([])
    SetUsedValuesArray([])
  }
  
  const Calculate = () => {
    let numberValue = Number(value)
    console.log(numberValue)
    array.push(numberValue) 
    console.log(array)
    const sumResult = array.reduce((next, number) => {
      return next + number;
    }, 0);
    Clear()
    setValue(String(sumResult))
    
  }
  const Plus = () => {
    let numberValue = Number(value)
    setArray(array => [...array,numberValue] );
    SetUsedValuesArray(array => [...array,numberValue] );
    usedValuesArray.push(numberValue) 
    setValue("")
    console.log("used values array  ")
    console.log(usedValuesArray)
  }
  const Minus = () => {
    let numberValue = Number(value)
    console.log(numberValue)
  }

  const Backspace = () => {
    setValue(value.substring(0, value.length - 1))
  } 

  const handleKeyDown = (event: { key: string}) => {
    if (event.key === 'Backspace') {
     Backspace()
    }
    document.addEventListener('keydown', function (event) {
      numbers.forEach(element => {
        if(event.key === String(element)){
          setValue(value.concat(String(element)))
        }
      });
    })
  };

  
  return (
    <div>
    <Wrapper>
      <DisplayWrapper>
        <Display value={value}></Display>
      </DisplayWrapper>
      <Grid onKeyDown={handleKeyDown}>
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
        <CalcButton onClick={Backspace}>d</CalcButton>
      </Grid>
        
    </Wrapper>
      
    </div>
  )
}