import React from 'react';
import ReactDOM from 'react-dom/client';
import { Header } from './components/Header';
import reportWebVitals from './reportWebVitals';
import Router from './Router';
import { GlobalStyle } from './style/global';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <GlobalStyle/>
      <Header/>
      <Router/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
