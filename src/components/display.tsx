import React from 'react'
import styled from 'styled-components'

type Props = {
  value: string,
  result: number,
  usedValuesArrary?: number[]
}

const Values = styled.div`
  display: flex;
  gap: 3px;
`

const ValueLine = styled.div`
  min-height: 22px;
`


export default function Display({value, result}: Props) {
  return (
    <ValueLine> 
      <Values>
        {value}
      </Values>
      <Values>
        {`= `}{result}
      </Values>
    </ValueLine>
    
    
  )
}