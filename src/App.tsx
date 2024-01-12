import React, { useState, useEffect, Children } from "react";
import { styled, ThemeProvider } from "styled-components";
import { darkTheme, lightTheme, pinkTheme, GlobalStyles } from "./styles/globalStyles";
import Header from "./components/UI/header/header";
import Calculator from "./components/calculator/calculator";

function App() {
  const [theme, setTheme] = useState(setSavedTheme);

  function setSavedTheme() {
    let getSavedTheme = localStorage.getItem("savedTheme")
    if(!getSavedTheme){
      setTheme(lightTheme)
      return
    }
    let savedTheme = JSON.parse(getSavedTheme as string);
    return savedTheme
  }

  useEffect(() => {
    const currentTheme = theme;
    localStorage.setItem("savedTheme", JSON.stringify(currentTheme))
  }, [theme])


  

return (
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <Header setTheme={setTheme}></Header>
      <Calculator><div></div></Calculator>
    </ThemeProvider>
  );
}
export default App;