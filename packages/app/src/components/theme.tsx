import { extendTheme, theme as baseTheme, type ThemeConfig } from '@chakra-ui/react';

const fonts = { mono: `'Menlo', monospace` };

const breakpoints = {
  sm: '40em',
  md: '52em',
  lg: '64em',
  xl: '80em',
};

const config: ThemeConfig = {
  initialColorMode: 'system',
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  semanticTokens: {
    colors: {
      text: {
        default: '#16161D',
        _dark: '#ade3b8',
      },
    },
    radii: {
      button: '12px',
    },
  },
  colors: {
    black: '#16161D',
    buttonPrimary: baseTheme.colors.green[300],
  },
  fonts,
  breakpoints,
});

export default theme;
