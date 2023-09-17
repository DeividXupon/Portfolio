import styled from 'styled-components'
import { space } from '../../UI/variaveis'
import { motion } from 'framer-motion'

export const Box = styled(motion.aside)`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  z-index: 2;
`

export const LeftMenuNav = styled(motion.nav)`
  width: ${space.x20};
  height: ${space.x20};
  background: ${(props) => props.theme.colors.secondary.base};
  display: flex;
  flex-direction: column;
  align-items: center;
  left: ${space.partition['x5/12']};
  top: 50%;
  border-right: solid 1px ${(props) => props.theme.colors.accent['100']};
  transition: background 600ms;

  @media (max-width: 700px) {
    display: none;
  }
`

export const Logo = styled(motion.img)`
  height: ${space.x20};
  width: ${space.x20};
  margin-bottom: ${space.x14};
`
export const BoxItensNav = styled(motion.ul)`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: ${space.x20};
  height: ${space.partition['x2/3']};
  min-height: 0px;
  color: ${(props) => props.theme.colors.primary.base};
`
export const LiNav = styled(motion.li)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 0px;
  border-radius: 0px 10px 10px 0px;
  background: ${(props) => props.theme.colors.secondary.base};
  border: 0px solid ${(props) => props.theme.colors.secondary.base};
  transition: background 600ms;
`
export const BoxRedLinks = styled(BoxItensNav)`
  align-items: center;
  justify-content: end;
  gap: ${space.x2};
  padding-bottom: ${space.x8};
  height: ${space.partition['x1/3']};
`
export const Ancora = styled.a`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  text-align: end;
  text-decoration: none;
  margin-right: 10px;
  color: ${(props) => props.theme.colors.primary.base};
  font-weight: 600;
`
