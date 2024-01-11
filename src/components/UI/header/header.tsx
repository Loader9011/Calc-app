import { darkTheme, lightTheme, pinkTheme } from "../../../styles/globalStyles"
import { HeaderButton, Container, HeaderElement } from "./header.sc"


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