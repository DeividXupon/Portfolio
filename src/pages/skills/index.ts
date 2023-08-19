import { styled } from 'styled-components'
import { space } from '../../UI/variaveis'

export const SkillsButtons = styled.div`
  width: ${space.container.xcontainer_sm};
  overflow: hidden;
  border: 2px solid ${(p) => p.theme.colors.accent.base};
  border-radius: ${space.x2};
  align-self: center;

  .hard,
  .soft {
    height: ${space.x14};
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

export const ContainerSkill = styled.div`
  width: ${space.container.xcontainer_lg};
  height: 480px;
  margin-top: ${space.x8};
  margin-bottom: ${space.x8};
  padding: ${space.x4};

  border-radius: ${space.x2};
  border: 1px solid ${(p) => p.theme.colors.accent.base};

  align-self: center;
  background: ${(p) => p.theme.colors.secondary.base};

  > h3 {
    font-size: ${(p) => p.theme.typography.variants.fontSize.lg};
    text-align: center;
    font-weight: 400;
    margin-bottom: ${space.x8};
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

  .item {
    border: 1px solid ${(p) => p.theme.colors.accent.base};
    border-radius: ${space.x2};
    padding: ${space.x2};
    background: ${(p) => p.theme.colors.background};
    width: 230px;
    display: flex;
    flex-direction: column;

    > h3 {
      font-size: ${(p) => p.theme.typography.variants.fontSize.lg_md};
      text-align: center;
    }

    > div {
      width: 100%;
      height: 150px;
      margin: ${space.x4} 0px;
    }

    > p {
      display: flex;
      align-items: center;
      height: 170px;
      text-align: center;
    }

    &:hover {
      box-shadow:
        0px 0px 10px ${(p) => p.theme.colors.primary.base},
        inset 0px 0px 10px ${(p) => p.theme.colors.primary.base};

      border: 1px solid ${(p) => p.theme.colors.primary.base};

      > div {
        color: ${(p) => p.theme.colors.primary.base};
      }
    }
  }
`
