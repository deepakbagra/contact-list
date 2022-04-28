
// store wraps App component so that ..
// .. all states can be dynamically assessed by all components

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import store from './redux/store';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>

);
