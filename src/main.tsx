import React from 'react';

import { ConfigProvider } from 'antd';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import './index.css';

import '@/i18n/i18n';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from '@/themes/GlobalStyle';

import Modal from './components/Modal/Modal';
import router from './router/router';
import { store } from './store/store';
import theme from './themes/theme';
import { antTheme } from './utils/antTheme';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ConfigProvider theme={antTheme}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <RouterProvider router={router} />
          <Modal />
        </ThemeProvider>
      </Provider>
    </ConfigProvider>
  </React.StrictMode>,
);
