import React from 'react';

import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import './index.css';

import '@/i18n/i18n';

import router from './router/router';
import { Provider } from 'react-redux';
import { store } from './store/store';

import Modal from './components/Modal/Modal';
import { ThemeProvider } from 'styled-components';
import theme from './themes/theme';
import { GlobalStyle } from './themes/GlobalStyle';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <RouterProvider router={router} />
        <Modal />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
);
