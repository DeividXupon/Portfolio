import styled from 'styled-components'
import { space } from '../../UI/variaveis'

export const Cont = styled.div<{ $index?: number }>`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: ${space.container.xcontainer_xl};
  margin-bottom: ${space.x32};

  ${(p) => (p.$index && p.$index % 2 === 0 ? '&::after' : '&::before')} {
    ${(p) =>
      p.$index !== undefined
        ? `content: counter(cont);
    counter-increment: cont;

    padding: 10px 30px 10px 30px;
    font-size: 70px;
    background-color: ${p.theme.colors.accent.base};
    border-radius: ${space.x2};`
        : ''}
  }
`

export const StudItem = styled.article`
  outline: 1px solid ${(p) => p.theme.colors.accent[100]};
  width: ${space.partition['x8/12']};
  padding: ${space.x4};
  border-radius: ${space.x2};

  > h3 {
    font-size: ${(p) => p.theme.typography.variants.fontSize.lg};
    font-weight: bold;
  }

  > h2 {
    margin-top: ${space.x2};
    font-size: ${(p) => p.theme.typography.variants.fontSize.lg_md};
    color: ${(p) => p.theme.colors.textColor.bright};
    text-align: center;
  }

  .Sco_Dat {
    display: flex;
    justify-content: space-between;
    color: ${(p) => p.theme.colors.textColor.matte};
    font-size: ${(p) => p.theme.typography.variants.fontSize.sm};

    > h4 {
      > strong {
        text-transform: uppercase;
        font-weight: bold;
      }
    }
  }
`

export const Description = styled.div`
  display: flex;

  > p {
    width: ${space.partition['x3/4']};
    padding-right: ${space.x4};
    align-self: center;
  }
  .listBox {
    display: flex;
    flex-direction: column;
    width: ${space.partition['x1/4']};

    > h4 {
      text-align: center;
    }
  }
`

export const LineMatte = styled.hr`
  width: ${space.partition['x11/12']};
  height: 2px;
  border-radius: 25%;
  background: ${(p) => p.theme.colors.primary[200]};
  border: none;
  margin-top: ${space.x2};
  margin-bottom: ${space.x4};
`
export const List = styled.ul`
  list-style: none;
  counter-reset: contador;

  > li {
    &::before {
      content: counter(contador) '.';
      counter-increment: contador;
      color: ${(p) => p.theme.colors.primary[200]};
      margin-right: 4px;
    }
  }
`
