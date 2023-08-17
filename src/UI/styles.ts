import { styled } from 'styled-components'
import { space } from './variaveis'

export const Title = styled.h2<{ $fontPrimari?: boolean }>`
  font-family: ${(p) =>
    p.$fontPrimari && p.theme.typography.fontFamily.primary};
  font-size: ${(p) => p.theme.typography.variants.fontSize.xl};
  font-weight: 400;
  text-align: center;
  padding: ${space.x12} 0px;
`
