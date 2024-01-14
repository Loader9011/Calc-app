import React from 'react'
import styled from 'styled-components'

type Props = {
  operationLine: string,
  result: number,
  usedValuesArrary?: number[]
}

const Values = styled.div`
  min-height: 22px;
  display: flex;
  gap: 3px;
`

const ValueLine = styled.div`
  min-height: 22px;
`


export default function Display({operationLine, result}: Props) {
  return (
    <ValueLine> 
      <Values>
        {operationLine}
      </Values>
      <Values>
        {`= `}{result}
      </Values>
    </ValueLine>
    
    
  )
}