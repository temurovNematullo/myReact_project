import './index.css';
import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";  // ✅ Добавляем Redux Provider
import App from './App';
import store from './redux/redux-store';
import { HashRouter } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <HashRouter basename="/">
  <React.StrictMode>
    <Provider store={store}> 
      <App />
    </Provider>
  </React.StrictMode>
  </HashRouter>
);


reportWebVitals();
