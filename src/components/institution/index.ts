import styled from 'styled-components'
import { space } from '../../UI/variaveis'
import content from '../../data/institution.json'
import { motion } from 'framer-motion'

export const Cont = styled.div<{ $index: number }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${space.container.xcontainer_lg};
  padding: ${space.x16} 0px;
  margin: auto;
  border-bottom: ${(p) =>
    content.length + 1 === p.$index
      ? ''
      : '8px ' + p.theme.colors.primary.base};

  ${(p) =>
    p.$index % 2 === 0
      ? 'border-left: 8px' + p.theme.colors.primary.base
      : 'border-right: 8px' + p.theme.colors.primary.base};

  border-style: solid;

  ${(p) => (p.$index && p.$index % 2 === 0 ? '&::before' : '&::after')} {
    ${(p) =>
      p.$index !== undefined
        ? `content: counter(cont);
    counter-increment: cont;
    
    transform: translate(${
      p.$index % 2 === 0 ? 'calc(-50% - 4px), 0' : 'calc(50% + 4px)'
    });
    padding: 10px 30px 10px 30px;
    font-size: 70px;
    background-color: ${p.theme.colors.accent.base};
    border-radius: ${space.x2};`
        : ''}
  }
`

export const StudItem = styled(motion.article)`
  outline: 1px solid ${(p) => p.theme.colors.accent[100]};
  padding: ${space.x4};
  border-radius: ${space.x2};

  > h3 {
    font-size: ${(p) => p.theme.typography.variants.fontSize.lg};
    font-weight: bold;
  }

  > h2 {
    margin-top: ${space.x4};
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
      margin-bottom: 6px;
    }
  }
`

export const LineMatte = styled.hr`
  width: ${space.partition['x11/12']};
  height: 2px;
  border-radius: 25%;
  background: ${(p) => p.theme.colors.primary[200]};
  border: none;
  margin-top: ${space.x1};
  margin-bottom: ${space.x2};
`
export const List = styled.ul`
  overflow-y: scroll;
  height: 150px;
  list-style: none;
  counter-reset: contador;
  font-size: 0.8em;

  &::-webkit-scrollbar {
    width: 4px;
  }

  > li {
    margin-bottom: 4px;
    &::before {
      content: counter(contador) '.';
      counter-increment: contador;
      color: ${(p) => p.theme.colors.primary[200]};
      margin-right: 4px;
    }
  }
`
