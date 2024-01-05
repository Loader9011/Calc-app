import React from 'react'
import styled from 'styled-components'

type Props = {
  value: string,
  children?: React.ReactNode,
  usedValuesArrary?: number[]
}

const Values = styled.div`
  display: flex;
  gap: 3px;
`

const ValueLine = styled.div`
  min-height: 22px;
`


export default function Display({value, children}: Props) {
  return (
    <Values>
      
    </Values>
    
  )
}