import { Reducer } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export default (reducers: Reducer) => {
  const persistedReducer = persistReducer(
    {
      key: 'fashionista',
      storage,
      whitelist: ['products', 'cart'],
    },
    reducers,
  );

  return persistedReducer;
};
