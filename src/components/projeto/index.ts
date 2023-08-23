import styled from 'styled-components'
import { space } from '../../UI/variaveis'
import { motion } from 'framer-motion'

export const Box = styled(motion.article)<{ $reverse?: boolean }>`
  display: flex;
  flex-direction: ${(p) => p.$reverse && 'row-reverse'};
  width: ${space.container.xcontainer_lg};
  margin: ${space.x20};
`

export const BoxImgsProject = styled.div`
  display: flex;
  justify-content: end;
  width: 680px;

  .moba {
    margin-left: -100%;
    position: relative;
    top: 48px;
    height: 300px;
    left: 13%;
    z-index: 1;
  }
`
export const BoxTextProject = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  > h3 {
    font-size: ${(p) => p.theme.typography.variants.fontSize.xxl};
  }
`

export const Link = styled(motion.a)`
  width: 55%;
  height: 40px;
  border: 1px solid ${(p) => p.theme.colors.accent.base};
  border-radius: ${space.x2};
  background: ${(p) => p.theme.colors.secondary.base};

  text-align: center;
  text-decoration: none;
  color: ${(p) => p.theme.colors.primary.base};
  font-size: ${(p) => p.theme.typography.variants.fontSize.lg_md};

  line-height: 40px;
  margin-bottom: -30px;
  align-self: center;
`

export const SkeletonMoba = styled.div`
  width: 130px;
  border: 4px solid ${(p) => (p.theme.title === 'dark' ? '#303030' : '#000')};
  border-radius: ${space.x4};
  background: ${(p) => (p.theme.title === 'dark' ? '#303030' : '#000')};
  outline: 1px solid ${(p) => p.theme.colors.accent.base};
  > img {
    border-radius: ${space.x2};
    width: 100%;
  }
`
export const SkeletonNot = styled.div`
  position: relative;
  width: 500px;
  margin: 0px 50px;
  border: 8px solid ${(p) => (p.theme.title === 'dark' ? '#303030' : '#000')};
  border-radius: ${space.x4};
  background: ${(p) => (p.theme.title === 'dark' ? '#303030' : '#000')};
  outline: 1px solid ${(p) => p.theme.colors.accent.base};

  &::before {
    content: '';
    position: relative;
    display: block;
    margin-bottom: 8px;
    left: 50%;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: ${(p) => p.theme.colors.background};
    outline: 1px solid ${(p) => p.theme.colors.accent.base};
  }

  &::after {
    content: '';
    display: block;
    position: absolute;
    left: -50px;

    width: 600px;
    height: 24px;
    border-radius: 30px;
    margin-top: 16px;

    background-color: ${(p) => (p.theme.title === 'dark' ? '#303030' : '#000')};
    outline: 1px solid ${(p) => p.theme.colors.accent.base};
  }
  > img {
    border-radius: ${space.x2};
    width: 100%;
  }
`
