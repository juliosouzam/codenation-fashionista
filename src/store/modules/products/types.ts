export enum ProductsTypes {
  FETCH_REQUEST = '@products/FETCH_REQUEST',
  FETCH_SUCCESS = '@products/FETCH_SUCCESS',
  FETCH_FAILURE = '@products/FETCH_FAILURE',
  SEARCH_PRODUCT = '@products/SEARCH_PRODUCT',
}

export interface FetchRequestAction {
  type: typeof ProductsTypes.FETCH_REQUEST;
}

export interface FetchSuccessAction {
  type: typeof ProductsTypes.FETCH_SUCCESS;
  products: IProduct[];
}

export interface FetchFailureAction {
  type: typeof ProductsTypes.FETCH_FAILURE;
}

export interface SearchProduct {
  type: typeof ProductsTypes.SEARCH_PRODUCT;
  param: string;
}

export type ProductActionTypes =
  | FetchRequestAction
  | FetchSuccessAction
  | FetchFailureAction
  | SearchProduct;

export interface ProductsState {
  products: IProduct[];
  filtered: IProduct[];
  loading: boolean;
  error: boolean;
}

export interface ISize {
  available: boolean;
  size: string;
  sku: string;
}

export interface IProduct {
  id?: number;
  slug?: string;
  name: string;
  style: string;
  code_color: string;
  color_slug: string;
  color: string;
  on_sale: boolean;
  regular_price: string;
  actual_price: string;
  discount_percentage: string;
  installments: string;
  image: string;
  sizes: ISize[];
}
