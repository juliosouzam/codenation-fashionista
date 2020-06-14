import { persistStore } from 'redux-persist';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import persistReducer from './persistReducers';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

import { ProductsState } from './modules/products/types';
import { CartState } from './modules/cart/types';

export interface ApplicationState {
  products: ProductsState;
  cart: CartState;
}

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  persistReducer(rootReducer),
  applyMiddleware(sagaMiddleware),
);

const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };
