import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./index.css"
import { legacy_createStore as createStore } from "redux";
import { Provider } from "react-redux";
import Invoices from "./Store/Reducers/InvoiceReducer";
import { BrowserRouter } from "react-router-dom";

const store = createStore(Invoices);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
