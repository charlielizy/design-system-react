import { CSSProp } from 'styled-components';
  export interface MyThemeProps {
    background: {
      app: string,
      appInverse: string,
      positive: string,
      negative: string,
      warning: string,
      light: string,
    },
    color: {
      primary: string,
      secondary: string,
      tertiary: string,

      //brand
      brandPrimary: string,
      brandSecondary: string,
      brandDarkened: string,
      brandHover: string,

      // normal color
      orange: string,
      gold: string,
      green: string,
      seafoam: string,
      purple: string,
      ultraviolet: string,

      // Monochrome
      lightest: string,
      lighter: string,
      light: string,
      mediumlight: string,
      medium: string,
      mediumdark: string,
      dark: string,
      darker: string,
      darkest: string,

      textDark: string,
      textGrey: string,

      border: string,

      // Status
      positive: string,
      negative: string,
      warning: string,
    },
    shadow: {
      primary: string,
      secondary: string,
      tertiary: string,
    }
    spacing: { 
      padding: { 
        small: number, 
        medium: number, 
        large: number, 
      },
      borderRadius: { 
        small: string, 
        default: string, 
      }
    },
    typography: {
      type: {
        primary: string,
        code: string,
      },
      weight: {
        regular: string,
        bold: string,
        extrabold: string,
        black: string,
      },
      size: {
        s1: string,
        s2: string,
        s3: string,
        m1: string,
        m2: string,
        m3: string,
        l1: string,
        l2: string,
        l3: string,
        code: string,
      },
    },
    pageMargins: CSSProp,
  }