import produce from 'immer';

import { ProductsTypes, ProductsState, ProductActionTypes } from './types';
import { slugify } from '../../../util/slugify';

const INITIAL_STATE: ProductsState = {
  products: [],
  filtered: [],
  loading: false,
  error: false,
};

export default function products(
  state = INITIAL_STATE,
  action: ProductActionTypes,
) {
  return produce(state, (draft) => {
    switch (action.type) {
      case ProductsTypes.FETCH_REQUEST: {
        draft.loading = true;
        break;
      }

      case ProductsTypes.FETCH_SUCCESS: {
        const productsData = action.products.map((product) => ({
          ...product,
          id: Math.random(),
          slug: slugify(product.name),
        }));
        draft.products = productsData;
        draft.filtered = productsData;
        draft.loading = false;
        draft.error = false;
        break;
      }

      case ProductsTypes.FETCH_FAILURE: {
        draft.error = true;
        break;
      }

      case ProductsTypes.SEARCH_PRODUCT: {
        draft.filtered = draft.products.filter((product) =>
          product.name
            .trim()
            .toLowerCase()
            .includes(action.param.trim().toLowerCase()),
        );
        break;
      }
      default:
    }
  });
}
