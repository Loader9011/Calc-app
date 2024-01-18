import {createGlobalStyle} from "styled-components" 
export const darkTheme = {
    backgroundColor: "#000",
    textColor: "#ffffff",
    itemsBackground: "#333333",
    itemsSecondary: "#ff4400"
  }
  export const lightTheme = {
    backgroundColor: "#fff",
    textColor: "#000000",
    itemsBackground: "#bebebe",
    itemsSecondary: "#ff4400"
  }
  export const pinkTheme = {
    backgroundColor: "#dd9fe2",
    textColor: "#9c0087",
    itemsBackground: "#e6e6e6",
    itemsSecondary: "#4d00a5"
  }
  
  export const GlobalStyles = createGlobalStyle`
   body {
    background: ${props => props.theme.backgroundColor};
    color: ${props => props.theme.textColor};
    font-weight: 500;
    transition: .3s ease;
    min-height: 100vh;
   }
   *{
     color: ${props => props.theme.textColor};
     margin: 0;
     padding: 0;
     box-sizing: border-box;
     transition: all .3s ease;
   }
   button{
    background-color: ${props => props.theme.itemsBackground};
   }
   .secondary{
    color: ${props => props.theme.itemsSecondary};
   }
   #ba{
    color: ${props => props.theme.itemsSecondary};
   }
   svg{
    fill: ${props => props.theme.itemsSecondary};
    transition: all 1ms ease;
    height: 0.9em;
    width: 0.9em;
   }
  `