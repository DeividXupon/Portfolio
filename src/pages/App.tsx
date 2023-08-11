import {
  LeftMenuNav,
  Box,
  Logo,
  BoxItensNav,
  LiNav,
  BoxRedLinks,
  Ancora
} from './index'
import { FaLinkedin, FaGithubSquare } from 'react-icons/fa'

import { space } from '../UI/variaveis'
import IconeLogo from '../assets/dss.png'

import { ThemeContext } from 'styled-components'

import NavItens from '../data/navItens'

const stylesIcon = {
  height: space.x10,
  minHeight: '0px',
  width: space.x10,
  padding: space['x2.5']
}

function App() {
  return (
    <Box
      animate={{ width: space.x20 }}
      transition={{ delay: 4, ease: 'easeInOut', duration: 1 }}
    >
      <LeftMenuNav
        animate={{ height: '100vh' }}
        transition={{ delay: 2.4, ease: [0.87, 0, 0.13, 1], duration: 1.5 }}
      >
        <BoxItensNav>
          <LiNav>
            <Logo
              initial={{ scale: 5.5, y: '84%' }}
              animate={{ scale: 0.85, y: '0%' }}
              transition={{
                y: {
                  delay: 3.2
                },
                delay: 1.9,
                ease: [0.85, 0, 0.15, 1],
                duration: 0.5
              }}
              src={IconeLogo}
              alt="Logo"
            />
          </LiNav>
          <ThemeContext.Consumer>
            {(theme) => {
              const LiNavProps = {
                initial: {
                  width: space.x20,
                  background: theme?.colors.secondary.base
                },
                whileHover: {
                  width: space.x56,
                  borderRight: `9px solid ${theme?.colors.primary.base}`,
                  background: theme?.colors.secondary['050']
                },
                transition: {
                  duration: 0.3,
                  ease: [0.76, 0, 0.24, 1]
                }
              }

              return NavItens.map((item) => (
                <LiNav {...LiNavProps}>
                  <Ancora>
                    <item.Icon style={stylesIcon}></item.Icon>
                  </Ancora>
                </LiNav>
              ))
            }}
          </ThemeContext.Consumer>
        </BoxItensNav>
        <BoxRedLinks>
          <ThemeContext.Consumer>
            {(theme) => {
              const LiNavProps = {
                initial: {
                  width: space.x20,
                  background: theme?.colors.secondary.base
                },
                whileHover: {
                  width: space.x48,
                  borderRight: `9px solid ${theme?.colors.primary.base}`,
                  background: theme?.colors.secondary['050']
                },
                transition: {
                  duration: 0.3,
                  ease: [0.76, 0, 0.24, 1]
                }
              }

              return (
                <>
                  <LiNav {...LiNavProps}>
                    <Ancora
                      href="https://www.linkedin.com/in/deividsouzasilva/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedin style={stylesIcon}></FaLinkedin>
                    </Ancora>
                  </LiNav>
                  <LiNav {...LiNavProps}>
                    <Ancora
                      href="https://github.com/DeividXupon"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithubSquare style={stylesIcon}></FaGithubSquare>
                    </Ancora>
                  </LiNav>
                </>
              )
            }}
          </ThemeContext.Consumer>
        </BoxRedLinks>
      </LeftMenuNav>
    </Box>
  )
}

export default App
