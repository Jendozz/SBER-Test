import { StrictMode } from 'react';

import { createRoot } from 'react-dom/client';

import { GlobalStyle } from '@global/globalStyle';

import App from './App';

const rootElement = document.getElementById('root') as HTMLElement;

if (!rootElement) throw new Error('Failed to find the root element');

createRoot(rootElement).render(
    <StrictMode>
        <GlobalStyle />
        <App />
    </StrictMode>
);
