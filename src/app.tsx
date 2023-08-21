import AsideNav from './components/asideMenu/asideNav.tsx'
import GlobalStyle from './UI/globalStyle.ts'
import dark from './UI/theme/dark.ts'
import light from './UI/theme/light.ts'
import { ThemeProvider } from 'styled-components'
import FatherOfAll from './components/fatherPages/fatherOfAll.tsx'
import Home from './pages/home/home.tsx'
import { DefaultTheme } from 'styled-components/dist/types'
import ThemeAlter from './components/themeAlter/themeAlter.tsx'
import usePersistState from './hooks/usePersistState.ts'
import About from './pages/about/about.tsx'
import Studies from './pages/studies/studies.tsx'
import Skills from './pages/skills/skills.tsx'
import Projects from './pages/projects/projects.tsx'
import Contact from './pages/contact/contact.tsx'

function App() {
  const [theme, setTheme] = usePersistState<DefaultTheme>('theme', light)

  const modifyTheme = () => {
    setTheme((prev) => (prev.title === light.title ? dark : light))
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ThemeAlter modifyTheme={modifyTheme} />
      <AsideNav />
      <FatherOfAll>
        <Home />
        <About />
        <Studies />
        <Skills />
        <Projects />
        <Contact />
      </FatherOfAll>
    </ThemeProvider>
  )
}

export default App
