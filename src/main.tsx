import React from 'react'
import ReactDOM from 'react-dom/client'
import AsideNav from './components/asideNav.tsx'
import GlobalStyle from './UI/globalStyle.ts'
import { dark } from './UI/theme'
import { ThemeProvider } from 'styled-components'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={dark}>
      <GlobalStyle />

      <AsideNav />
    </ThemeProvider>
  </React.StrictMode>
)
