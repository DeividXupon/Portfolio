import { ThemeConsumer } from 'styled-components'
import { BoxHeader, ButtonTheme } from './index'
import { LuSun, LuMoon } from 'react-icons/lu'

interface Iprops {
  modifyTheme: () => void
}

function ThemeAlter({ modifyTheme }: Iprops) {
  return (
    <BoxHeader
      initial={{ opacity: 0, scale: 0, x: '-100%' }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 9, scale: { type: 'spring', damping: 5 } }}
    >
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
