import { styled } from 'styled-components'
import { space } from '../../UI/variaveis'

export const BoxHeader = styled.header`
  position: fixed;
  width: ${space.x12};
  height: ${space.x12};
  border-radius: 0px 0px 0px 10px;
  left: calc(100% - 10px);
  transform: translate(-100%, 0%);
  overflow: hidden;
  border-bottom: 1px solid ${(props) => props.theme.colors.accent.base};
  border-left: 1px solid ${(props) => props.theme.colors.accent.base};
  z-index: 1;
`

export const ButtonTheme = styled.button`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.colors.primary.base};
  transition: 100ms;
  &:hover {
    transition: 100ms;
    background: ${(props) => props.theme.colors.accent['000']};
  }
`
