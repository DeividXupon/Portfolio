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
import { motion } from 'framer-motion'

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
        fontSize: 0,
        color: '#fff'
      },
      whileHover: {
        width: space.x52,
        height: '58px',
        borderRight: `6px solid ${theme?.colors.primary.base}`,
        borderTop: `1px solid ${theme?.colors.primary.base}`,
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
            <Logo
              initial={{
                scale: 5.5,
                y: '84%'
              }}
              animate={{
                scale: 0.9,
                y: '0%',
                borderRadius: space.x1
              }}
              transition={{
                y: {
                  duration: 0.45,
                  ease: 'linear',
                  delay: 2.8
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
              return NavItens.map((item, index) => (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 5 + index / 3, type: 'spring' }}
                >
                  <LiNav key={item.id} {...LiNavProps(theme)}>
                    <Ancora href={item.href}>
                      {item.title} <item.Icon style={stylesIcon}></item.Icon>
                    </Ancora>
                  </LiNav>
                </motion.div>
              ))
            }}
          </ThemeContext.Consumer>
        </BoxItensNav>
        <BoxRedLinks>
          <ThemeContext.Consumer>
            {(theme) => {
              return (
                <>
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 6.3, type: 'spring' }}
                  >
                    <LiNav {...LiNavProps(theme)}>
                      <Ancora
                        href="https://www.linkedin.com/in/deividsouzasilva/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaLinkedin
                          style={{
                            marginLeft: '12px',
                            ...stylesIcon,
                            width: space.x9
                          }}
                        ></FaLinkedin>
                        LINKEDIN
                      </Ancora>
                    </LiNav>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 6.3, type: 'spring' }}
                  >
                    <LiNav {...LiNavProps(theme)}>
                      <Ancora
                        href="https://github.com/DeividXupon"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaGithubSquare
                          style={{
                            marginLeft: '12px',
                            ...stylesIcon,
                            width: space.x9
                          }}
                        ></FaGithubSquare>
                        GITHUB :D
                      </Ancora>
                    </LiNav>
                  </motion.div>
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
