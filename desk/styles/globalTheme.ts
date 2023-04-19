import { extendTheme } from '@chakra-ui/react'

export const globalTheme = extendTheme({
  colors: {
    dPrimary: '#666CFF',
    dPrimaryHover: {
      dark: '#575ce0',
      transparency: '#666bffd2',
    },
    dBlack: '#242424',
    dRed: {
      400: '#F56565',
      500: '#E53E3E',
    },
    dGray: {
      dark: '#232323B3',
      medium: '#BABABA',
      light: '#F8F8F8',
    },
  },
})
