import produce from 'immer';

import { CartTypes, CartState, CartActionTypes } from './types';

const INITIAL_STATE: CartState = {
  products: [],
  loading: false,
  error: false,
};

export default function products(
  state = INITIAL_STATE,
  action: CartActionTypes,
) {
  return produce(state, (draft) => {
    switch (action.type) {
      case CartTypes.ADD: {
        const productIndex = draft.products.findIndex(
          (p) => p.id === action.product.id && p.size === action.product.size,
        );

        if (productIndex >= 0) {
          draft.products[productIndex].amount += 1;
        } else {
          draft.products.push({ ...action.product, amount: 1 });
        }

        break;
      }

      case CartTypes.REMOVE: {
        const productIndex = draft.products.findIndex(
          (p) => p.id === action.id && p.size === action.size,
        );

        if (productIndex >= 0) {
          draft.products.splice(productIndex, 1);
        }
        break;
      }

      case CartTypes.UPDATE_AMOUNT: {
        if (action.amount <= 0) {
          return state;
        }

        const productIndex = draft.products.findIndex(
          (p) => p.id === action.id && p.size === action.size,
        );

        if (productIndex >= 0) {
          draft.products[productIndex].amount = Number(action.amount);
        }
        break;
      }

      default:
    }
    return draft;
  });
}
