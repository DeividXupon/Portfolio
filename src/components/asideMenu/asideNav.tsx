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

import { space } from '../../UI/variaveis'
import IconeLogo from '../../assets/dss.png'

import { ThemeContext } from 'styled-components'

import NavItens from '../../data/navItens'
import { DefaultTheme } from 'styled-components/dist/types'

const stylesIcon = {
  height: space.x10,
  width: space.x10,
  padding: space['x2.5']
}

function AsideNav() {
  function LiNavProps(theme: DefaultTheme | undefined) {
    return {
      initial: {
        width: space.x20,
        background: theme?.colors.secondary.base,
        fontSize: 0,
        color: '#fff'
      },
      whileHover: {
        width: space.x52,
        borderRight: `9px solid ${theme?.colors.primary.base}`,
        background: theme?.colors.secondary['050'],
        fontSize: '1.15em'
      },
      transition: {
        width: {
          duration: 0.8,
          ease: [0.76, 0, 0.24, 1]
        },
        fontSize: {
          delay: 0.35,
          duration: 0.1
        }
      }
    }
  }

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
            <ThemeContext.Consumer>
              {(theme) => (
                <Logo
                  initial={{
                    scale: 5.5,
                    y: '84%',
                    border: `0px solid ${theme?.colors.primary[400]}`
                  }}
                  animate={{
                    scale: 0.9,
                    y: '-5%',
                    border: `${space.x1} solid ${theme?.colors.primary[200]}`,
                    borderRadius:
                      space.x3 +
                      ' ' +
                      space.x3 +
                      ' ' +
                      space.x3 +
                      ' ' +
                      space.x3
                  }}
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
              )}
            </ThemeContext.Consumer>
          </LiNav>

          <ThemeContext.Consumer>
            {(theme) => {
              return NavItens.map((item) => (
                <LiNav {...LiNavProps(theme)}>
                  <Ancora>
                    {item.title} <item.Icon style={stylesIcon}></item.Icon>
                  </Ancora>
                </LiNav>
              ))
            }}
          </ThemeContext.Consumer>
        </BoxItensNav>
        <BoxRedLinks>
          <ThemeContext.Consumer>
            {(theme) => {
              return (
                <>
                  <LiNav {...LiNavProps(theme)}>
                    <Ancora
                      href="https://www.linkedin.com/in/deividsouzasilva/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedin
                        style={{ marginLeft: '12px', ...stylesIcon }}
                      ></FaLinkedin>{' '}
                      LINKEDIN
                    </Ancora>
                  </LiNav>
                  <LiNav {...LiNavProps(theme)}>
                    <Ancora
                      href="https://github.com/DeividXupon"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithubSquare
                        style={{ marginLeft: '12px', ...stylesIcon }}
                      ></FaGithubSquare>{' '}
                      GITHUB :D
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

export default AsideNav
