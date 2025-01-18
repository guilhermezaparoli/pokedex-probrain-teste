
import { Header } from "./components/Layout/Header"

import { defaultTheme } from "./styles/themes/default"
import { Body } from "./components/Layout/Body"
import GlobalStyle from "./styles/themes/GlobalStyle"
import { ThemeProvider } from "@emotion/react"


export function App() {


  return (
    <>
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle/>
      <Header/>
      <Body />
    </ThemeProvider>
    </>
  )
}


