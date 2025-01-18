import GlobalStyle from './styles/themes/GlobalStyle';
import { ThemeProvider } from '@mui/material';
import { theme } from './styles/themes/default';
import { BrowserRouter } from 'react-router-dom';

import { AppRoutes } from './routes';

export function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}
