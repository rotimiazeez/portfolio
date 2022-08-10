import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const container = document.getElementById("root");
const rootContainer = ReactDOM.createRoot(container);
rootContainer.render (
  <React.StrictMode>
  <BrowserRouter>
   <App />
  </BrowserRouter>
</React.StrictMode>
);
