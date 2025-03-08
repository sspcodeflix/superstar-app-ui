import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CommenContextProvider } from './contextapi/commenContext/commenContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CommenContextProvider>
      <App />
    </CommenContextProvider>
  </React.StrictMode>
);

reportWebVitals();
