import { motion } from 'framer-motion'
import styled from 'styled-components'
import { space } from '../../UI/variaveis'

export const FatherCentralizer = styled.main`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
`
export const Father = styled(motion.div)`
  display: flex;
  flex-direction: column;
  height: ${space.x20};
  background: ${(props) => props.theme.colors.background};
  overflow-x: hidden;
  padding-left: ${space.x20};
  transition: background 300ms;
`
