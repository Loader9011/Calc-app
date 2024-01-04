import React from 'react'

type Props = {
  value: string,
  children?: React.ReactNode
}

export default function Display({value, children}: Props) {
  return (
    <>
    {value}
    </>
  )
}