import React, { useState } from 'react'
import styled from 'styled-components'
import Display from './display'

type Props = {
  children: React.ReactNode,
}

const Wrapper = styled.div`
width: fit-content;
margin: 100px auto 0;
height: 100%;
`

const DisplayWrapper = styled.div`
`

const Grid = styled.div`
display: grid;
position: relative;
gap: 10px 13px;
grid-template-columns: repeat(3, 1fr);
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

  let number: number[] = [];

  const Clear = () => {
    setValue("")
    setAddValue(Number())
    setMinusValue(Number())
  }
  
  const Calculate = () => {
    let numberValue = Number(value)
    console.log(numberValue)
    
  }
  const Plus = () => {
    let numberValue = Number(value)
    number.push(numberValue)
    console.log(number)
    
  }
  const Minus = () => {
    let numberValue = Number(value)
    console.log(numberValue)
  }

  return (
    <div>
    <Wrapper>
      <DisplayWrapper>
        <Display value={value}>Display</Display>
      </DisplayWrapper>
        <Grid>
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
        </Grid>
        
    </Wrapper>
      
    </div>
  )
}