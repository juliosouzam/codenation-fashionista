import {
  AddRequestAction,
  RemoveRequestAction,
  CartTypes,
  UpdateAmountAction,
  ProductCart,
} from './types';

export function addToCartRequest(product: ProductCart): AddRequestAction {
  return { type: CartTypes.ADD, product };
}

export function removeFromCart(id: number, size: string): RemoveRequestAction {
  return { type: CartTypes.REMOVE, id, size };
}
export function updateAmount(
  id: number,
  size: string,
  amount: number,
): UpdateAmountAction {
  return { type: CartTypes.UPDATE_AMOUNT, id, size, amount };
}
