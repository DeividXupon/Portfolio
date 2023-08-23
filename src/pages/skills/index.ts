import { styled } from 'styled-components'
import { space } from '../../UI/variaveis'
import { motion } from 'framer-motion'

export const SkillsButtons = styled.div`
  width: ${space.x96};
  overflow: hidden;
  border: 1px solid ${(p) => p.theme.colors.accent.base};
  border-bottom: none;
  border-radius: ${space.x2} ${space.x2} 0px 0px;
  align-self: center;
  margin: auto;

  .hard,
  .soft {
    height: ${space.x10};
    width: ${space.partition['x1/2']};
    font-size: ${(p) => p.theme.typography.variants.fontSize.lg_md};
    background-color: ${(p) => p.theme.colors.secondary.base};
    padding: 0;
    color: ${(p) => p.theme.colors.textColor.natural};
    cursor: pointer;

    &:hover {
      background: ${(p) => p.theme.colors.primary[150]};
      color: black;
    }

    &:disabled {
      background: ${(p) => p.theme.colors.accent.base};
      color: black;
    }
  }

  .hard {
    border-right: 1px solid ${(p) => p.theme.colors.accent.base};
  }
  .soft {
    border-left: 1px solid ${(p) => p.theme.colors.accent.base};
  }
`

export const ContainerSkill = styled(motion.div)`
  box-sizing: border-box;

  position: relative;
  width: ${space.container.xcontainer_lg};
  height: 480px;

  padding: 0px ${space.x4};
  margin: auto;

  border-left: 1px solid ${(p) => p.theme.colors.accent.base};
  border-right: 1px solid ${(p) => p.theme.colors.accent.base};

  align-self: center;
  background: ${(p) => p.theme.colors.secondary.base};
  overflow: hidden;

  > h3 {
    font-size: ${(p) => p.theme.typography.variants.fontSize.lg};
    text-align: center;
    font-weight: 400;
    margin: ${space.x4} 0px ${space.x4} 0px;
  }
`

export const Decorative = styled.div<{ $top?: boolean }>`
  width: calc(${space.container.xcontainer_lg} - 2px);
  height: 20px;
  background: ${(p) => p.theme.colors.background};
  margin: auto;
  border: 1px solid ${(p) => p.theme.colors.accent.base};
  border-radius: ${(p) =>
    p.$top
      ? `${space.x2} ${space.x2} 0px 0px`
      : `0px 0px ${space.x2} ${space.x2}`};
`

export const HardSkill = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0px 30px;
  gap: 15px 38px;

  .item {
    display: flex;

    justify-content: center;
    align-items: center;
    height: 130px;
    width: 130px;
    background: ${(p) => p.theme.colors.background};
    border: 1px solid ${(p) => p.theme.colors.accent['000']};
    border-radius: ${space.x1};
    transition: 60ms;

    &:hover {
      box-shadow:
        0px 0px 10px ${(p) => p.theme.colors.primary.base},
        inset 0px 0px 10px ${(p) => p.theme.colors.primary.base};

      border: 1px solid ${(p) => p.theme.colors.primary.base};
      color: ${(p) => p.theme.colors.primary.base};
    }
  }

  .description {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${space.x2} 10px;
    border: 1px solid ${(p) => p.theme.colors.accent.base};
    background-color: ${(p) => p.theme.colors.secondary['050']};
    border-radius: ${space.x1};
    width: 100%;
    height: 80px;
    margin-top: ${space.x3};
  }
`

export const SoftSkill = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Dia = styled.dialog`
  border: none;
  padding: 30px;
  border-radius: ${space.x2};
  border: 1px solid ${(p) => p.theme.colors.accent.base};
  background: ${(p) => p.theme.colors.secondary['050']};

  &:focus {
    outline: none;
  }

  &::backdrop {
    backdrop-filter: blur(5px);
  }

  > button {
    transform: translate(50%, 0%);
    width: 50%;
    font-size: ${(p) => p.theme.typography.variants.fontSize.lg_md};
    text-align: center;
    border-radius: ${space.x1};
    display: block;
    margin-bottom: 20px;
    cursor: pointer;

    &:hover {
      background: #ff1b1b;
    }
  }

  > div {
    display: flex;
    > p {
      display: inline;
      width: 200px;
      background-color: red;
      align-self: center;
      border-radius: 0px ${space.x2} ${space.x2} 0px;
      border: 1px solid ${(p) => p.theme.colors.accent.base};
      border-left: none;
      padding: 10px;
      background-color: ${(p) => (p.theme.title === 'dark' ? '#000' : '#fff')};
      color: ${(p) => p.theme.colors.textColor.bright};
    }
  }
`
