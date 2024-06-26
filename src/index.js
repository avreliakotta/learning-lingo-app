import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { HashRouter } from "react-router-dom";
import { App } from '../src/components/App/App';
import './index.css';
import { persistor} from "./redux/store";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    < HashRouter>
    <PersistGate loading={null} persistor={persistor}>
    <App />
    </PersistGate>
    </HashRouter>
    </Provider>
  </React.StrictMode>
);
