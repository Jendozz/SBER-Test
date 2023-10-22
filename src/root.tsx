import { StrictMode } from 'react';

import { createTheme } from '@mui/material/styles';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import { globalColors } from '@global/globalColors';
import { GlobalStyle } from '@global/globalStyle';
import { store } from '@store/store';

import App from './App';

const rootElement = document.getElementById('root') as HTMLElement;

if (!rootElement) throw new Error('Failed to find the root element');
const theme = createTheme({
    palette: {
        primary: { main: globalColors.primary },
        secondary: { main: globalColors.default },
    },
});

createRoot(rootElement).render(
    <StrictMode>
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <App />
            </ThemeProvider>
        </Provider>
    </StrictMode>
);
