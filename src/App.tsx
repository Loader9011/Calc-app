import React, { useState, useEffect, Children } from "react";
import { styled, ThemeProvider } from "styled-components";
import { darkTheme, lightTheme, pinkTheme, GlobalStyles } from "./styles/globalStyles";
import Header from "./components/header";
import Calculator from "./components/calculator";
import Display from "./components/display";
import PatterCommand from "./components/patternCommand";

function App() {
  const [theme, setTheme] = useState(setSavedTheme);

  function setSavedTheme() {
    let getSavedTheme = localStorage.getItem("savedTheme")
    if(!getSavedTheme){
      setTheme(lightTheme)
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
      <Header theme={setSavedTheme} setTheme={setTheme}></Header>
      <PatterCommand></PatterCommand>

    </ThemeProvider>
  );
}
export default App;