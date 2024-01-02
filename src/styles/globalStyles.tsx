import {createGlobalStyle} from "styled-components" 
export const darkTheme = {
    backgroundColor: "#000",
    textColor: "#ffffff",
    itemsBackground: "#333333"
  }
  
  export const lightTheme = {
    backgroundColor: "#fff",
    textColor: "#000000",
    itemsBackground: "#bebebe"
  }
  export const pinkTheme = {
    backgroundColor: "#dd9fe2",
    textColor: "#9c0087",
    itemsBackground: "#e6e6e6"
  }
  
  export const GlobalStyles = createGlobalStyle`
   body {
    background: ${props => props.theme.backgroundColor};
    color: ${props => props.theme.textColor};
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
  `