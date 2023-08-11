import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App.tsx'
import GlobalStyle from './UI/globalStyle.ts'
import { dark } from './UI/theme'
import { ThemeProvider } from 'styled-components'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={dark}>
      <GlobalStyle />

      <App />
    </ThemeProvider>
  </React.StrictMode>
)
