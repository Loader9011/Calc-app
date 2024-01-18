import React from 'react'

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