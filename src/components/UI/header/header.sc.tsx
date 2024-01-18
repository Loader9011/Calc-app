import { styled } from "styled-components"

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

export {HeaderButton, Container, HeaderElement}