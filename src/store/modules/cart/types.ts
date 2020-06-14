import { IProduct } from '../products/types';

export enum CartTypes {
  ADD = '@cart/ADD',
  REMOVE = '@cart/REMOVE',
  UPDATE_AMOUNT = '@cart/UPDATE_AMOUNT',
}

export interface AddRequestAction {
  type: typeof CartTypes.ADD;
  product: ProductCart;
}

export interface RemoveRequestAction {
  type: typeof CartTypes.REMOVE;
  id: number;
  size: string;
}

export interface UpdateAmountAction {
  type: typeof CartTypes.UPDATE_AMOUNT;
  id: number;
  size: string;
  amount: number;
}

export type CartActionTypes =
  | AddRequestAction
  | RemoveRequestAction
  | UpdateAmountAction;

export interface CartState {
  products: ProductCart[];
  loading: boolean;
  error: boolean;
}

export type ProductCart = Omit<IProduct, 'sizes'> & {
  size: string;
  amount: number;
};
