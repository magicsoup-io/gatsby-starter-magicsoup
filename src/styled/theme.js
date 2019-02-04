
const primary = '#4A3838'
const primaryLight = '#534141'
const primaryLighter = '#685353'

export default {
  breakpoints: ['40em', '52em', '64em'],
  fontSizes: [
    12, 16, 18, 22, 26, 30, 42, 50
  ],
  colors: {
    primary: primary,
    primaryLight: primaryLight,
    primaryLighter: primaryLighter,
    primaryTransparent: 'rgba(74, 56, 56, 0.5)',
    font: '#705757',
    cream: '#f4f0ed',
    creamLight: '#E4D9D9'
  },
  space: [
    0, 4, 8, 16, 32, 64, 128, 256
  ],
  fonts: {
    sans: '"Overpass", system-ui, sans-serif'
  },
  shadows: {
    small: '0 0 4px rgba(0, 0, 0, .125)',
    large: '0 0 24px rgba(0, 0, 0, .125)'
  },
  buttons: {
    primary: {
      color: '#fff',
      backgroundColor: primary,
      '&:hover': {
        color: '#fff',
        backgroundColor: primaryLight
      }
    },
    white: {
      color: '#fff',
      backgroundColor: 'rgba(255,255,255,0.2)',
      boxShadow: 'inset 0 0 0 2px',
      fontWeight: 400,
      '&:hover': {
        color: primary,
        backgroundColor: '#fff'
      }
    }
  },
  icons: {
    defaultDisplay: 'flex',
    defaultSize: '16px',
    sizeMini: '16px',
    sizeMedium: '32px',
    sizeLarge: '64px'
  }
}