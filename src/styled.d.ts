import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string

    colors: {
      textColor: {
        bright: string
        natural: string
        matte: string
      }
      background: string
      primary: {
        '000': string
        '050': string
        base: string
        '150': string
        '200': string
        '400': string
      }
      secondary: {
        '000': string
        '050': string
        base: string
      }
      accent: {
        '000': string
        base: string
        '100': string
      }
    }

    typography: {
      fontFamily: {
        primary: string
        secondary: string
      }
      variants: {
        fontSize: {
          xs: string
          sm: string
          md: string
          lg_md: string
          lg: string
          xl: string
          xxl: string
        }
      }
    }
  }
}
