import styled from "styled-components"

const Wrapper = styled.div`
width: fit-content;
margin: 100px auto 0;
height: 100%;
display: flex;
flex-direction: column;
gap: 15px;
`

export const FlexContainer = styled.div`
display:flex;
`


const CalcBtn = styled.button`
  width: 55px;
  height: 55px;
  border-radius: 50%;
  border: none;
  font-size: 18px;
  cursor: pointer;
  &:hover{
    opacity: .7
  }
`

const CalcContainer = styled.div`
  width: 300px;
`

const DisplayWrapper = styled.div`
  font-size: 18px;
  word-wrap: normal;
  min-height: 22px;
`

const Grid = styled.div`
display: grid;
gap: 16px 18px;
grid-template-columns: repeat(3, 1fr);
`

export const GrindOneColumn = styled(Grid)`
  margin-left: 18px;
  grid-template-columns: repeat(1, 1fr);
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

export {Wrapper, DisplayWrapper, Grid, CalcButton, CalcContainer, CalcBtn}