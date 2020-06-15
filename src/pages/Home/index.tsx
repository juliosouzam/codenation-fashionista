import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { ApplicationState } from '../../store';
import { ProductsState } from '../../store/modules/products/types';
import { loadProductsRequest } from '../../store/modules/products/actions';

import {
  Wrapper,
  NoProductsFound,
  Container,
  Badge,
  Prices,
  OldPrice,
  NewPrice,
} from './styles';

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const { filtered } = useSelector<ApplicationState, ProductsState>(
    (state) => state.products,
  );

  useEffect(() => {
    dispatch(loadProductsRequest());
  }, [dispatch]);

  return (
    <Wrapper>
      {filtered.length <= 0 && (
        <NoProductsFound>Nenhum produto encontrado</NoProductsFound>
      )}
      <Container>
        {filtered.map((product) => (
          <li key={product.id}>
            {product.on_sale && (
              <Badge>
                <span>{product.discount_percentage}</span>
              </Badge>
            )}
            <Link to={`/product/${product.slug}`}>
              <img
                src={
                  product.image ||
                  'https://via.placeholder.com/470x594/FFFFFF/?text=Imagem+Indisponível'
                }
                alt={product.name}
              />
              <strong>{product.name}</strong>
              <Prices>
                {product.on_sale ? (
                  <>
                    <OldPrice>De: {product.regular_price}</OldPrice>
                    <NewPrice>Por: {product.actual_price}</NewPrice>
                  </>
                ) : (
                  <NewPrice>{product.actual_price}</NewPrice>
                )}
              </Prices>
            </Link>
          </li>
        ))}
      </Container>
    </Wrapper>
  );
};

export default Home;
