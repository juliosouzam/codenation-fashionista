import { call, put, all, takeLatest } from 'redux-saga/effects';

import { ProductsTypes } from './types';
import { loadProductsSuccess } from './actions';

import api from '../../../services/api';

function* loadProducts() {
  const response = yield call(api.get, '');

  yield put(loadProductsSuccess(response.data));
}

export default all([takeLatest(ProductsTypes.FETCH_REQUEST, loadProducts)]);
