import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    primary: {
      500: '#4C51BF',
    },
    gray: {
      800: '#1A202C',
      700: '#2D3748',
      200: '#EDF2F7',
    },
  },
  fonts: {
    heading: 'Roboto, sans-serif',
    body: 'Inter, sans-serif',
  },
});

export default theme;
