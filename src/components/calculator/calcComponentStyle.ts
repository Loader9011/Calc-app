import styled from "styled-components"

const Wrapper = styled.div`
width: fit-content;
margin: 100px auto 0;
height: 100%;
display: flex;
flex-direction: column;
gap: 15px;
`

const FlexContainer = styled.div`
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

const GrindOneColumn = styled(Grid)`
  padding-left: 18px;
  grid-template-columns: repeat(1, 1fr);
  justify-content: right;
  display: flex;
  flex-direction: column;
  margin: 0;
  max-width: 274px;
`


export {Wrapper, DisplayWrapper, Grid, CalcBtn, FlexContainer, GrindOneColumn}