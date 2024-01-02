import React, { useState, useEffect, Children } from "react";
import { styled, ThemeProvider } from "styled-components";
import { darkTheme, lightTheme, pinkTheme, GlobalStyles } from "./styles/globalStyles";
import Header from "./components/header";
import Calculator from "./components/calculator";
import Display from "./components/display";

function App() {
  const [theme, setTheme] = useState(lightTheme);

 

  

return (
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <Header theme={theme} setTheme={setTheme}></Header>
      <Calculator>
        <></>
      </Calculator>

    </ThemeProvider>
  );
}
export default App;