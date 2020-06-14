import {
  ProductsTypes,
  IProduct,
  FetchRequestAction,
  FetchSuccessAction,
  SearchProduct,
} from './types';

export function loadProductsRequest(): FetchRequestAction {
  return { type: ProductsTypes.FETCH_REQUEST };
}

export function loadProductsSuccess(products: IProduct[]): FetchSuccessAction {
  return { type: ProductsTypes.FETCH_SUCCESS, products };
}

export function searchProduct(param: string): SearchProduct {
  return { type: ProductsTypes.SEARCH_PRODUCT, param };
}
