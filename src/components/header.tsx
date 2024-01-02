import React, { ReactNode, useEffect, useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { darkTheme, lightTheme, pinkTheme } from "../styles/globalStyles"

const HeaderButton = styled.button`
  padding: 10px 15px;
  border: none;
  border-radius: 1em;
  cursor: pointer;
  box-shadow: 1px 2px #0000001f;
`
const Container = styled.div`
width: 75%;
margin: 0 auto;
`

const HeaderElement = styled.header`
  justify-content: center;
  display: flex;
  gap: 12px;
  padding: 12px 0;
`


export default function Header({theme, setTheme}: any) {
  
  return (
    <Container>
      <HeaderElement>
        <HeaderButton onClick={ () => setTheme(darkTheme)}>Black</HeaderButton>
        <HeaderButton onClick={ () => setTheme(lightTheme)}>White</HeaderButton>
        <HeaderButton onClick={ () => setTheme(pinkTheme)}>Pink</HeaderButton>
      </HeaderElement>
    </Container>
  )
}