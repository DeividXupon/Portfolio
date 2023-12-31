import { styled } from 'styled-components'
import { space } from '../../UI/variaveis'
import { motion } from 'framer-motion'

export const HomeContainer = styled(motion.main)`
  display: flex;
  padding-top: ${space.x8};
  flex-direction: column;
  justify-content: center;
  align-items: center; //992 1199
`
export const MainTitle = styled.h1`
  font-family: ${(props) => props.theme.typography.fontFamily.primary};
  font-size: ${(props) => props.theme.typography.variants.fontSize.xxl};
  font-weight: 600;
  line-height: ${space.x16};
  transition: 400ms;
  text-align: center;
  margin-top: auto;
  margin-bottom: auto;

  @media (max-width: 991px) {
    font-size: ${(props) => props.theme.typography.variants.fontSize.xl};
  }

  @media (max-width: 768px) {
    font-size: ${(props) => props.theme.typography.variants.fontSize.lg};
    line-height: ${space.x10};
  }
`

export const SubTitle = styled(motion.h2)`
  font-size: ${(props) => props.theme.typography.variants.fontSize.lg};
  color: ${(props) => props.theme.colors.textColor.matte};
  font-weight: 500;
  margin-bottom: ${space.x8};
  width: ${space.container.xcontainer_md};
  transition: 400ms;
  text-align: center;

  @media (max-width: 991px) {
    font-size: ${(props) => props.theme.typography.variants.fontSize.lg};
  }

  @media (max-width: 768px) {
    font-size: ${(props) => props.theme.typography.variants.fontSize.lg_md};
    margin-bottom: ${space.x6};
  }
`
export const Intro = styled(motion.p)`
  font-size: ${(props) => props.theme.typography.variants.fontSize.lg_md};
  width: ${space.container.xcontainer_sm};
  font-weight: 300;
  margin-top: ${space.x16};
  transition: 400ms;
  text-align: justify;

  > em {
    color: ${(props) =>
      props.theme.title === 'dark'
        ? props.theme.colors.primary.base
        : props.theme.colors.primary[400]};
  }

  @media (max-width: 991px) {
    font-size: ${(props) => props.theme.typography.variants.fontSize.md};
  }

  @media (max-width: 768px) {
    width: ${space.container.xcontainer_xs};
    margin-top: ${space.x10};
  }

  @media (max-width: 480px) {
    width: 300px;
    text-align: center;
  }
`
export const ContainerTitle = styled(motion.div)`
  display: flex;
  position: relative;
  width: ${space.container.xcontainer_md};
  background: ${(props) => props.theme.colors.secondary.base};
  border: solid 1px ${(props) => props.theme.colors.accent['100']};
  padding: ${space.x3 + ' ' + space.x6 + ' ' + space.x8 + ' ' + space.x6};
  border-radius: ${space.x4};
  overflow: hidden;
  transition: 200ms;

  @media (min-width: 768px) and (max-width: 991px) {
    width: ${space.container.xcontainer_sm};
  }

  @media (max-width: 768px) {
    width: 270px;
    height: 200px;
    margin-left: 5px;
    margin-right: 5px;
  }

  @media (max-width: 480px) {
    width: 250px;
    padding: ${space['x1.5'] +
    ' ' +
    space.x3 +
    ' ' +
    space.x4 +
    ' ' +
    space.x3};
    height: 200px;
    margin-left: 5px;
    margin-right: 5px;
  }
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

export const ButtonScroll = styled(motion.button)`
  position: relative;

  width: ${space.x52};
  height: ${space.x14};
  margin-top: ${space.x16};
  margin-bottom: ${space.x32};
  border-radius: ${space.x4};
  background: ${(props) => props.theme.colors.primary.base};

  font-family: ${(props) => props.theme.typography.fontFamily.secondary};
  font-size: ${(props) => props.theme.typography.variants.fontSize.lg_md};
  font-weight: 600;
  color: black;

  overflow: hidden;
  border: 3px solid ${(props) => props.theme.colors.primary.base};
  transition: 300ms;

  cursor: pointer;

  &:hover {
    transition: 300ms;
    box-shadow:
      0px 0px 15px ${(props) => props.theme.colors.primary.base},
      inset 0px 0px 15px ${(props) => props.theme.colors.primary.base},
      inset 210px 0px 0px ${(props) => props.theme.colors.primary['200']};
  }
`
export const Lik = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${space.x2};
  text-decoration: none;
  color: #000;
`
