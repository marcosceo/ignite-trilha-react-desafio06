import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
      light: {
          "white": "#FFFFFF",
          "headings": "#F5F8FA",
          "info": "DADADA",
      },
      dark: {
        "black": "#000000",
        "headings": "#47585B",
        "info": "#999999",
        "info50%": "rgba(153, 153, 153, 0.5)",
      },
      highlight: {
        "100": "#FFBA08",
        "50": "rgba(255, 186, 8, 0.5)",
      }
  },
  fonts: {
      heading: 'Poppins',
      body: 'Poppins',
      "card": 'Barlow',
  },
  styles: {
      global: {
          body: {
              color: '#F5F8FA'
          }
      }
  }
})