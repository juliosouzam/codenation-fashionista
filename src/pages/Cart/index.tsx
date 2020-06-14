import React, { useCallback, useMemo } from 'react';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';
import { useSelector, useDispatch } from 'react-redux';

import { Container, ProductTable, Total } from './styles';

import { ApplicationState } from '../../store';

import { updateAmount, removeFromCart } from '../../store/modules/cart/actions';
import { CartState, ProductCart } from '../../store/modules/cart/types';
import { format as formatPrice } from '../../util/format';

type ProductData = ProductCart & { subtotal: string };

const Cart: React.FC = () => {
  const dispatch = useDispatch();

  const { products } = useSelector<ApplicationState, CartState>(
    (state) => state.cart,
  );

  const total = formatPrice(
    useSelector<ApplicationState, number>((state) =>
      state.cart.products.reduce(
        (t, product) =>
          t +
          Number(
            product.actual_price.replace('R$', '').replace(',', '.').trim(),
          ) *
            product.amount,
        0,
      ),
    ),
  );

  const increment = useCallback(
    (product) => {
      dispatch(updateAmount(product.id, product.size, product.amount + 1));
    },
    [dispatch],
  );

  const decrement = useCallback(
    (product) => {
      dispatch(updateAmount(product.id, product.size, product.amount - 1));
    },
    [dispatch],
  );

  const remove = useCallback(
    (product) => {
      dispatch(removeFromCart(product.id, product.size));
    },
    [dispatch],
  );

  const productData = useMemo<ProductData[]>(() => {
    return products.map((product) => ({
      ...product,
      subtotal: formatPrice(
        Number(
          product.actual_price.replace('R$', '').replace(',', '.').trim(),
        ) * product.amount,
      ),
    }));
  }, [products]);

  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>PRODUTO</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {productData.map((product) => (
            <tr>
              <td>
                <img src={product.image} alt={product.name} />
              </td>
              <td data-label="PRODUTO">
                <strong>
                  {product.name} - {product.size}
                </strong>
                <span>{product.actual_price}</span>
              </td>
              <td data-label="QTD">
                <div>
                  <button type="button" onClick={() => decrement(product)}>
                    <MdRemoveCircleOutline size={20} color="#212529" />
                  </button>
                  <input type="text" readOnly value={product.amount} />
                  <button type="button" onClick={() => increment(product)}>
                    <MdAddCircleOutline size={20} color="#212529" />
                  </button>
                </div>
              </td>
              <td data-label="SUBTOTAL">
                <strong>{product.subtotal}</strong>
              </td>
              <td data-label="AÇÕES">
                <button type="button" onClick={() => remove(product)}>
                  <MdDelete size={20} color="#212529" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </ProductTable>

      <footer>
        {productData.length > 0 ? (
          <>
            <button type="button">Finalizar Pedido</button>
            <Total>
              <span>TOTAL</span>
              <strong>{total}</strong>
            </Total>
          </>
        ) : (
          <p>Carrinho vazio</p>
        )}
      </footer>
    </Container>
  );
};

export default Cart;
