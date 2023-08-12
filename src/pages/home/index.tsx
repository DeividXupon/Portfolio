import { styled } from 'styled-components'
import { space } from '../../UI/variaveis'

export const HomeContainer = styled.main`
  display: flex;
  padding-top: ${space.x8};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`
export const MainTitle = styled.h1`
  font-family: ${(props) => props.theme.typography.fontFamily.primary};
  font-size: ${(props) => props.theme.typography.variants.fontSize.xxl};
  font-weight: 600;
  line-height: ${space.x20};
`

export const SubTitle = styled.h2`
  font-size: ${(props) => props.theme.typography.variants.fontSize.lg};
  color: ${(props) => props.theme.colors.textColor.matte};
  font-weight: 500;
  margin-bottom: ${space.x8};
  width: ${space.container.xcontainer_md};
`
export const Intro = styled.p`
  font-size: ${(props) => props.theme.typography.variants.fontSize.lg_md};
  width: ${space.container.xcontainer_md};
  font-weight: 300;
  margin-top: ${space.x16};
`
export const ContainerTitle = styled.div`
  position: relative;
  width: ${space.container.xcontainer_lg};
  background: ${(props) => props.theme.colors.secondary.base};
  padding: ${space.x1 + ' ' + space.x1 + ' ' + space.x5 + ' ' + space.x1};
  border-radius: ${space.x8};
  overflow: hidden;
`
export const ButtonAlter = styled.button`
  left: 100%;
  top: 100%;
  transform: translate(-150%, -150%);
  position: absolute;
  margin-right: 10px;
  width: ${space.x9};
  height: ${space.x9};
  border: none;
  cursor: pointer;
  border-radius: ${space['x1.5']};
  color: black;
  transition: 300ms;
  background: ${(props) => props.theme.colors.primary.base};

  &:hover {
    transition: 300ms;
    transform: translate(-150%, -160%);
    background: ${(props) => props.theme.colors.primary['050']};
  }

  &:disabled {
    background: ${(props) => props.theme.colors.accent.base};
  }
`

export const ButtonScroll = styled.button`
  display: flex;
  justify-content: center;
  gap: ${space.x4};
  align-items: center;
  width: ${space.x52};
  height: ${space.x14};
  border-radius: ${space.x10};
  background: ${(props) => props.theme.colors.primary.base};
  font-family: ${(props) => props.theme.typography.fontFamily.secondary};
  font-size: ${(props) => props.theme.typography.variants.fontSize.lg_md};
  font-weight: 600;
  text-align: center;
  color: black;
  position: relative;
  overflow: hidden;
  border: 3px solid ${(props) => props.theme.colors.primary.base};
  transition: 300ms;
  margin-top: ${space.x16};
  cursor: pointer;

  &:hover {
    transition: 300ms;
    box-shadow:
      0px 0px 15px ${(props) => props.theme.colors.primary.base},
      inset 0px 0px 15px ${(props) => props.theme.colors.primary.base},
      inset 0px 60px 0px ${(props) => props.theme.colors.primary['200']},
      inset 0px -60px 0px ${(props) => props.theme.colors.primary['200']},
      inset 100px 0px 0px ${(props) => props.theme.colors.primary['200']},
      inset -100px 0px 0px ${(props) => props.theme.colors.primary['200']};
  }
`
