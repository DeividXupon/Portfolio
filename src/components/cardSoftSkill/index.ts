import { styled } from 'styled-components'
import { space } from '../../UI/variaveis'

export const CardBox = styled.div`
  box-sizing: border-box;
  border: 1px solid ${(p) => p.theme.colors.accent.base};
  border-radius: ${space.x2};
  padding: ${space.x2};
  background: ${(p) => p.theme.colors.background};
  width: 230px;
  display: flex;
  flex-direction: column;
  color: ${(p) => p.theme.colors.textColor.natural};

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
`
