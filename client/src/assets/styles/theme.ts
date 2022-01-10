import 'styled-components'
import { DefaultTheme } from 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: {
        main: {
          elevation_0: string
          elevation_2: string
          elevation_4: string
        }
        light: {
          elevation_0: string
          elevation_2: string
          elevation_4: string
        }
        dark: {
          elevation_0: string
          elevation_2: string
          elevation_4: string
        }
      }
      secondary: {
        main: {
          elevation_0: string
          elevation_2: string
          elevation_4: string
        }
        light: {
          elevation_0: string
          elevation_2: string
          elevation_4: string
        }
        dark: {
          elevation_0: string
          elevation_2: string
          elevation_4: string
        }
      }
      grey: {
        elevation_0: string
        elevation_2: string
        elevation_4: string
      }
    }
    fontSizes: {
      xsmall: string
      small: string
      medium: string
      large: string
      xLarge: string
    }
    fontColor: {
      primary: string
      secondary: string
      tertiary: string
    }
    mediaWidthSizes: {
      xsmall: string
      small: string
      medium: string
      large: string
      xlarge: string
    }
  }
}

const Palette: DefaultTheme = {
  colors: {
    primary: {
      main: {
        elevation_0: 'rgb(100, 40, 140, 0.3)',
        elevation_2: 'rgb(100, 40, 140, 0.4)',
        elevation_4: 'rgb(100, 40, 140, 0.5)'
      },
      light: {
        elevation_0: 'rgba(150, 60, 160, 0.3)',
        elevation_2: 'rgba(150, 60, 160, 0.4)',
        elevation_4: 'rgba(150, 60, 160, 0.5)'
      },
      dark: {
        elevation_0: 'rgb(63, 20, 102, 0.45)',
        elevation_2: 'rgb(63, 20, 102, 0.55)',
        elevation_4: 'rgb(63, 20, 102, 0.65)'
      }
    },
    secondary: {
      main: {
        elevation_0: 'rgb(130, 55, 150, 0.3)',
        elevation_2: 'rgb(130, 55, 150, 0.4)',
        elevation_4: 'rgb(130, 55, 150, 0.5)'
      },
      light: {
        elevation_0: 'rgb(190, 90, 220, 0.3)',
        elevation_2: 'rgb(190, 90, 220, 0.4)',
        elevation_4: 'rgb(190, 90, 220, 0.5)'
      },
      dark: {
        elevation_0: 'rgb(87, 31, 122, 0.45)',
        elevation_2: 'rgb(87, 31, 122, 0.55)',
        elevation_4: 'rgb(87, 31, 122, 0.65)'
      }
    },
    grey: {
      elevation_0: '#212121',
      elevation_2: '#303030',
      elevation_4: '#424242'
    }
  },
  fontColor: { primary: '#f5f5f5', secondary: '#dcdcdc', tertiary: '#939393' },
  fontSizes: {
    xsmall: '12px',
    small: '14px',
    medium: '16px',
    large: '18px',
    xLarge: '20px'
  },
  mediaWidthSizes: {
    xsmall: '360px',
    small: '400px',
    medium: '600px',
    large: '900px',
    xlarge: '1366px'
  }
}

export { Palette }
