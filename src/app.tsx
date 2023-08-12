import AsideNav from './components/asideMenu/asideNav.tsx'
import GlobalStyle from './UI/globalStyle.ts'
import dark from './UI/theme/dark.ts'
import light from './UI/theme/light.ts'
import { ThemeProvider } from 'styled-components'
import FatherOfAll from './components/fatherPages/fatherOfAll.tsx'
import Home from './pages/home/home.tsx'

function App() {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyle />
      <AsideNav />
      <FatherOfAll>
        <Home />
      </FatherOfAll>
    </ThemeProvider>
  )
}

export default App
