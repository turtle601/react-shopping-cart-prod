import React from 'react';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';

import './index.css';
import { worker } from './mocks/browser';
import AppRouter from './router/AppRouter';

if (process.env.NODE_ENV === 'development') {
  const { worker } = require('./mocks/browser');
  worker.start();
}

// const main = async () => {
//   if (window.location.pathname === '/react-shopping-cart-prod') {
//     window.location.pathname = '/react-shopping-cart-prod/';
//     return;
//   }

//   await worker.start({
//     serviceWorker: {
//       url: '/react-shopping-cart-prod/mockServiceWorker.js',
//     },
//   });
// };

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <RecoilRoot>
    <AppRouter />
  </RecoilRoot>
);

// main();
