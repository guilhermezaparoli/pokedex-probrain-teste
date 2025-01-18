
import { Header } from "./components/Layout/Header"


import { Body } from "./components/Layout/Body"
import GlobalStyle from "./styles/themes/GlobalStyle"
import { ThemeProvider } from "@mui/material"
import { theme } from "./styles/themes/default"



export function App() {


  return (
    <>
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <Header/>
      <Body />
    </ThemeProvider>
    </>
  )
}


