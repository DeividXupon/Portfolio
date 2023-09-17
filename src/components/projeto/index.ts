import styled from 'styled-components'
import { space } from '../../UI/variaveis'
import { motion } from 'framer-motion'

export const Box = styled(motion.article)<{ $reverse?: boolean }>`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  flex-direction: ${(p) => p.$reverse && 'row-reverse'};
  width: 100%;
  margin-bottom: ${space.x20};
  margin-top: ${space.x20};
  padding-left: ${space.x10};
  padding-right: ${space.x10};

  @media (max-width: 992px) {
    flex-direction: column;
    align-items: center;
    padding: 0px;
  }

  @media (max-width: 767px) {
    margin-bottom: ${space.x10};
    margin-top: ${space.x10};
  }
`

export const BoxImgsProject = styled.div`
  display: flex;
  justify-content: end;
  width: 680px;
  min-width: 0px;

  .moba {
    margin-left: -100%;
    position: relative;
    top: 48px;
    height: 300px;
    left: 13%;
    z-index: 1;
  }

  @media (max-width: 1199px) and (min-width: 992px) {
    .moba {
      height: 230px;
      left: 30%;
    }
  }

  @media (max-width: 992px) {
    width: auto;
    margin-top: ${space.x16};
  }

  @media (max-width: 992px) {
    .moba {
      height: 272px;
      top: 0px;
      left: 0px;
    }
  }

  @media (max-width: 767px) {
    .moba {
      height: 340px;
    }
  }
`
export const BoxTextProject = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 380px;
  min-width: 380px;

  > h3 {
    font-size: ${(p) => p.theme.typography.variants.fontSize.xxl};
  }

  @media (max-width: 992px) {
    > p {
      margin-top: ${space.x4};
      margin-bottom: ${space.x4};
    }
  }

  @media (max-width: 480px) {
    width: 300px;
    min-width: 300px;

    > p {
      margin-top: ${space.x6};
      margin-bottom: ${space.x6};
    }

    > h3 {
      font-size: ${(p) => p.theme.typography.variants.fontSize.lg};
      text-align: center;
    }
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

  @media (max-width: 480px) {
    line-height: 34px;
    width: 70%;
    height: 35px;
  }
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

  @media (max-width: 1199px) and (min-width: 991px) {
    width: 100px;
  }

  @media (max-width: 992px) {
    width: 120px;
  }

  @media (max-width: 767px) {
    width: 150px;
  }

  @media (max-width: 480px) {
    display: none;
  }
`
export const SkeletonNot = styled.div`
  position: relative;
  width: 500px;
  margin-left: ${space.x4};
  margin-right: ${space.x4};
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

  @media (max-width: 1199px) {
    width: 400px;
    height: 260px;

    &::after {
      display: none;
    }
  }

  @media (max-width: 767px) {
    display: none;
  }
`
