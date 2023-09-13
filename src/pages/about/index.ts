import { styled } from 'styled-components'
import { space } from '../../UI/variaveis'
import { motion } from 'framer-motion'

export const Container = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  padding: ${space.x14} 0px ${space.x14} 0px;
  margin: ${space.x4} 0px ${space.x32} 0px;
`
export const Faixa = styled.div`
  top: -${space.x12};
  position: absolute;
  background: ${(p) => p.theme.colors.secondary['050']};
  width: 100%;
  height: 100%;
  padding: ${space.x12} 0px ${space.x12} 0px;
  transform: skewY(-4deg);
`

export const BoxContent = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: ${space.x6};
  width: ${space.container.xcontainer_lg};
  background: ${(props) => props.theme.colors.secondary.base};
  border-radius: ${space.x2};
  border: 1px solid ${(props) => props.theme.colors.accent['000']};
  z-index: 1;

  > div {
    align-self: center;
  }
`

export const ModalHover = styled(motion.div)<{ $item: number; $exit: number }>`
  position: absolute;
  display: flex;
  flex-direction: column;
  color: ${(p) => p.theme.colors.textColor.bright};
  border-radius: ${space.x2};
  top: 18%;
  left: calc(24.5% + ${(props) => 6.14 * props.$item + '%'}); //6.14
  border: 1px solid ${(props) => props.theme.colors.accent['000']};
  box-shadow: 4px 4px 12px black;
  transition:
    800ms cubic-bezier(0.25, 1, 0.5, 1),
    opacity 400ms ease-in-out 150ms;
  padding: ${space.x2};
  overflow: hidden;

  > h5 {
    font-size: 1.5em;
    font-weight: bold;
    margin-bottom: ${space.x2};
  }

  > p {
    min-width: 334px;
  }
`

export const MySelf = styled.div`
  > img {
    width: calc(${space.x80} + ${space.x6});
    height: calc(${space.x80} + ${space.x6});
    border-radius: ${space.x2};
  }
`

export const TextConteiner = styled.div`
  display: flex;
  flex-direction: column;

  > h3 {
    font-size: ${(p) => p.theme.typography.variants.fontSize.lg_md};
    font-weight: 900;
    color: ${(p) => p.theme.colors.primary.base};
  }

  > h2 {
    font-size: ${(p) => p.theme.typography.variants.fontSize.lg};
    margin-top: ${space.x1};
    margin-bottom: ${space.x2};
    font-family: ${(p) => p.theme.typography.fontFamily.primary};
    font-weight: bold;
  }

  > h4 {
    font-size: ${(p) => p.theme.typography.variants.fontSize.sm};
    font-weight: 400;
    margin-bottom: ${space.x4};
  }

  > p {
    width: ${space.container.xcontainer_sm};
    margin-bottom: ${space.x8};
  }
`

export const ContainerAboutButtons = styled.div`
  display: flex;
  justify-content: space-between;

  > ul {
    display: flex;
    gap: ${space.x2};
  }

  > a {
    text-align: center;
    line-height: ${space.x14};
    width: ${space.x48};
    height: ${space.x14};
    border-radius: ${space.x2};
    text-decoration: none;
    color: #000;
    font-size: 1.4em;

    background: ${(p) => p.theme.colors.primary[150]};
    border: 1px solid ${(p) => p.theme.colors.accent.base};

    cursor: pointer;

    transition: 250ms;
    &:hover {
      transform: scale(1.1);
    }
  }
`
export const Modal = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;

  color: ${(p) => p.theme.colors.primary.base};

  width: ${space.x14};
  height: ${space.x14};
  border-radius: ${space.x2};

  background: ${(p) => p.theme.colors.background};
  border: 1px solid ${(p) => p.theme.colors.accent.base};

  &:hover {
    border: 1px solid ${(p) => p.theme.colors.primary.base};
    box-shadow:
      0px 0px 4px ${(p) => p.theme.colors.primary.base},
      inset 0px 0px 4px ${(p) => p.theme.colors.primary.base};
  }
`
