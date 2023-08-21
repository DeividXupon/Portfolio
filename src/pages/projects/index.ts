import styled from 'styled-components'

export const Define = styled.dfn<{ $index: number }>`
  color: hsl(${(p) => (p.$index + 1) * 45}, 100%, 50%);
  font-weight: 600;
`
