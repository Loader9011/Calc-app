import React from 'react'
import styled from 'styled-components'

type Props = {
    children: React.ReactNode,
    value: any,
    onClick: Function
}




export default function CalcButton({children, value, onClick}: Props) {
  return (
    <div>{children}</div>
  )
}