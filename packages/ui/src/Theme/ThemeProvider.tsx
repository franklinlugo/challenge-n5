import * as React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import GlobalStyle from './GlobalStyles';
import theme from './defaultTheme';

const ThemeProvider = ({ children }: React.PropsWithChildren) => {
  return (
    <StyledThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </StyledThemeProvider>
  );
};

export default ThemeProvider;
