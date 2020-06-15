import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ToastContainer } from 'react-toastify';

import GlobalStyles from './styles/global';

import Header from './components/Header';

import { store, persistor } from './store';

import Routes from './routes';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <Header />
          <Routes />

          <ToastContainer autoClose={3000} position="top-left" />
          <GlobalStyles />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
