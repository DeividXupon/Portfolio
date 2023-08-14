import { ThemeConsumer } from 'styled-components'
import { BoxHeader, ButtonTheme } from './index'
import { LuSun, LuMoon } from 'react-icons/lu'

interface Iprops {
  modifyTheme: () => void
}

function ThemeAlter({ modifyTheme }: Iprops) {
  return (
    <BoxHeader>
      <ButtonTheme onClick={modifyTheme}>
        <ThemeConsumer>
          {(theme) =>
            theme?.title === 'dark' ? <LuSun size={20} /> : <LuMoon size={20} />
          }
        </ThemeConsumer>
      </ButtonTheme>
    </BoxHeader>
  )
}

export default ThemeAlter
