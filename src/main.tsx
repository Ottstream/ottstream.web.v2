import React from 'react';

import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import './index.css';

import '@/i18n/i18n';

import { GlobalStyle } from '@/themes/GlobalStyle';

import Modal from './components/Modal/Modal';
import router from './router/router';

import { Provider } from 'react-redux';

import { store } from './store/store';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle />
      <RouterProvider router={router} />
      <Modal />
    </Provider>
  </React.StrictMode>,
);
