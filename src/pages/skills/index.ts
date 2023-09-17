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

  @media (max-width: 480px) {
    width: ${space.x48};

    .hard,
    .soft {
      font-size: ${(p) => p.theme.typography.variants.fontSize.md};
    }
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

  @media (max-width: 1199px) {
    overflow-y: scroll;
    width: ${space.container.xcontainer_md};
  }

  @media (max-width: 991px) {
    width: ${space.container.xcontainer_sm};
    padding: 0px;
  }

  @media (max-width: 767px) {
    width: ${space.container.xcontainer_xs};
  }

  @media (max-width: 480px) {
    width: 320px;
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

  @media (max-width: 1199px) {
    box-sizing: border-box;
    width: ${space.container.xcontainer_md};
  }

  @media (max-width: 991px) {
    width: ${space.container.xcontainer_sm};
  }

  @media (max-width: 767px) {
    width: ${space.container.xcontainer_xs};
  }

  @media (max-width: 480px) {
    width: 320px;
  }
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
    font-size: ${(p) => p.theme.typography.variants.fontSize.md};
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

  @media (max-width: 1199px) {
    gap: 15px 10px;

    .item {
      height: 120px;
      width: 120px;
    }
  }

  @media (max-width: 991px) {
    gap: 15px 5px;

    .item {
      height: 100px;
      width: 100px;
    }

    .description {
      height: 100px;
    }
  }

  @media (max-width: 767px) {
    gap: 5px 5px;

    .item {
      height: 60px;
      width: 80px;
    }

    .description {
      height: 160px;
      font-size: ${(p) => p.theme.typography.variants.fontSize.sm};
    }
  }

  @media (max-width: 480px) {
    gap: 5px 5px;
    padding: 5px;

    .item {
      height: 50px;
      width: 60px;
    }

    .description {
    }
  }
`

export const SoftSkill = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 1199px) {
    flex-wrap: wrap;
    gap: 15px;
    align-items: center;
  }

  @media (max-width: 992px) {
    flex-direction: column;
    gap: 15px;
    align-items: center;
  }
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
    position: relative;
    left: calc(100% - 50px);
    width: 40px;
    height: 40px;
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

  @media (max-width: 767px) {
    padding: 10px;
    > div {
      .boxCard {
        display: none;
      }

      > p {
        border: 1px solid ${(p) => p.theme.colors.accent.base};
        border-radius: ${space.x2};
      }
    }
  }
`
