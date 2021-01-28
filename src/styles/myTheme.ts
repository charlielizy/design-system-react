// import { DefaultTheme, css } from 'styled-components'
import { css } from 'styled-components'
import { MyThemeProps } from './ITheme'

const breakpoint: number = 600;
const pageMargin: number = 5.55555;

export const MyTheme: MyThemeProps= {
  // Global style variables
  background: {
    app: '#F6F9FC',
    appInverse: '#7A8997',
    positive: '#E1FFD4',
    negative: '#FEDED2',
    warning: '#FFF5CF',
    light: '#F6F6F6',
  },
  color: {
    // Palette
    primary: '#FF4785', // coral
    secondary: '#1EA7FD', // ocean
    tertiary: '#DDDDDD',

    //brand
    brandPrimary: '#9F147B',
    brandSecondary: '#462170',
    brandDarkened: '#810052',
    brandHover: '#C4007C',

    // normal color
    orange: '#FC521F',
    gold: '#FFAE00',
    green: '#66BF3C',
    seafoam: '#37D5D3',
    purple: '#6F2CAC',
    ultraviolet: '#2A0481',

    // Monochrome
    lightest: '#FFFFFF',
    lighter: '#F8F8F8',
    light: '#F3F3F3',
    mediumlight: '#EEEEEE',
    medium: '#DDDDDD',
    mediumdark: '#999999',
    dark: '#666666',
    darker: '#444444',
    darkest: '#333333',

    textDark: '#000000',
    textGrey: '#545454',

    border: 'rgba(0,0,0,.1)',

    // Status
    positive: '#66BF3C',
    negative: '#FF4400',
    warning: '#E69D00',
  },
  shadow: {
    primary: '0 1px 5px 0 rgba(0, 0, 0, 0.1)',
    secondary: '0 2px 15px 0 rgba(0, 0, 0, 0.2)',
    tertiary: '0 3px 6px 0 rgba(0, 0, 0, 0.16)',
  },
  spacing: {
    padding: {
      small: 10,
      medium: 20,
      large: 30,
    },
    borderRadius: {
      small: '5px',
      default: '10px',
    },
  },
  typography: {
    type: {
      primary: '"Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
      code: '"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace',
    },
    weight: {
      regular: '400',
      bold: '700',
      extrabold: '800',
      black: '900',
    },
    size: {
      s1: '12',
      s2: '14',
      s3: '16',
      m1: '20',
      m2: '24',
      m3: '28',
      l1: '32',
      l2: '40',
      l3: '48',
      code: '90',
    },
  },
  
  pageMargins: css`
    padding: 0 ${props => props.theme.spacing.padding.medium}px; 
    @media (min-width: ${breakpoint * 1}px) {
    margin: 0 ${pageMargin * 1}%;
    }
    @media (min-width: ${breakpoint * 2}px) {
      margin: 0 ${pageMargin * 2}%;
    }
    @media (min-width: ${breakpoint * 3}px) {
      margin: 0 ${pageMargin * 3}%;
    }
    @media (min-width: ${breakpoint * 4}px) {
      margin: 0 ${pageMargin * 4}%;
    }
    `
}