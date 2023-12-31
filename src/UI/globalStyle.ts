import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

  body {
    line-height: 1;
    background: ${(props) => props.theme.colors.accent.base};
    color: ${(props) => props.theme.colors.textColor.natural};
    box-sizing: border-box;
  }


  &::-webkit-scrollbar {
    width: 10px; 
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.colors.primary[150]};
    border-radius: 20px;
  }

  &::-webkit-scrollbar-track {
    background-color: ${(props) => props.theme.colors.secondary['050']}; 
  }
  
  /* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
  */

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    font-family: ${(props) => props.theme.typography.fontFamily.secondary};
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  button {
    border: none;
    &:focus {
      outline: none;
    }
  }
`

export default GlobalStyle
