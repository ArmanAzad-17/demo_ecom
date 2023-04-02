import React from 'react';
import ReactDOM from 'react-dom/client';
import './scss/custom.scss'
import Content from './layouts/Content';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Content/>
  </React.StrictMode>
);
