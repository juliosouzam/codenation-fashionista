import React, { useState, useEffect, useCallback } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import {
  Container,
  Background,
  Content,
  Err,
  Sizes,
  Size,
  AddToCartButton,
} from './styles';

import { ApplicationState } from '../../store';
import {
  ProductsState,
  IProduct,
  ISize,
} from '../../store/modules/products/types';

import { addToCartRequest } from '../../store/modules/cart/actions';

interface ProductParams {
  slug: string;
}

const Detail: React.FC = () => {
  const [size, setSize] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const dispatch = useDispatch();

  const { params } = useRouteMatch<ProductParams>();
  const [product, setProduct] = useState<IProduct>({} as IProduct);
  const { filtered } = useSelector<ApplicationState, ProductsState>(
    (state) => state.products,
  );

  useEffect(() => {
    const findProduct = filtered.find((f) => f.slug === params.slug);

    if (findProduct) {
      setProduct(findProduct);
      setLoading(false);
    }
  }, [params.slug, filtered]);

  const handleChangeSize = useCallback((s: string) => {
    setSize(s);
  }, []);

  const handleAddProductToCart = useCallback(() => {
    if (!size) {
      setError(true);
      return;
    }

    dispatch(addToCartRequest({ ...product, size, amount: 1 }));
  }, [size, dispatch, product]);

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <Container>
      <Background
        src={
          product.image ||
          'https://via.placeholder.com/470x594/FFFFFF/?text=Imagem+Indisponível'
        }
        alt={product.name}
      />

      <Content>
        <strong>{product.name}</strong>
        <div>
          <strong>{product.actual_price}</strong>
          <span>em até {product.installments}</span>
        </div>

        <span>Escolha o tamanho</span>
        {error && <Err>Selecione um tamanho para adicionar ao carrinho</Err>}
        <Sizes>
          {product.sizes.map(
            (s: ISize) =>
              s.available && (
                <Size
                  selected={s.size === size}
                  key={s.size}
                  type="button"
                  onClick={() => handleChangeSize(s.size)}
                >
                  {s.size}
                </Size>
              ),
          )}
        </Sizes>

        <AddToCartButton type="button" onClick={handleAddProductToCart}>
          Adicionar ao carrinho
        </AddToCartButton>
      </Content>
    </Container>
  );
};

export default Detail;
