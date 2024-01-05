import styled from "styled-components"

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

export {Wrapper, DisplayWrapper, Grid, CalcButton}