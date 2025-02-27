import './index.css';
import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";  // ✅ Добавляем Redux Provider
import App from './App';
import store from './redux/redux-store';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}> {/* ✅ Оборачиваем App в Provider */}
      <App />
    </Provider>
  </React.StrictMode>
);


reportWebVitals();
