import React, { useCallback, useState, ChangeEvent } from 'react';
import { Link } from 'react-router-dom';
import { MdShoppingBasket, MdSearch, MdArrowBack } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';

import { searchProduct } from '../../store/modules/products/actions';
import { ApplicationState } from '../../store';

import {
  Wrapper,
  Container,
  SeachWrapper,
  Cart,
  Badge,
  Actions,
  SearchButton,
  SearchContainer,
} from './styles';

const Header: React.FC = () => {
  const [toogled, setToogled] = useState(false);
  const dispatch = useDispatch();

  const total = useSelector<ApplicationState, number>((state) =>
    state.cart.products.reduce((t, product) => {
      t += product.amount;

      return t;
    }, 0),
  );

  const handleToogleSearchContainer = useCallback(() => {
    setToogled((prevState) => !prevState);
  }, []);

  const handleSearchProducts = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      event.preventDefault();

      dispatch(searchProduct(event.target.value));
    },
    [dispatch],
  );

  return (
    <Wrapper>
      <Container toogled={toogled}>
        <Link to="/">Fashionista</Link>

        <SeachWrapper>
          <input
            type="text"
            placeholder="Pesquisa"
            onChange={handleSearchProducts}
          />
          <button type="button">
            <MdSearch size={20} color="#999" />
          </button>
        </SeachWrapper>

        <Actions>
          <SearchButton onClick={handleToogleSearchContainer}>
            <MdSearch size={36} color="#fff" />
          </SearchButton>

          <Cart to="/cart">
            <MdShoppingBasket size={36} color="#fff" />
            <Badge>{total}</Badge>
          </Cart>
        </Actions>
      </Container>

      <SearchContainer toogled={toogled}>
        <button type="button" onClick={handleToogleSearchContainer}>
          <MdArrowBack size={20} color="#fff" />
        </button>

        <SeachWrapper toogled={toogled}>
          <input type="text" />
          <button type="button">
            <MdSearch size={20} color="#999" />
          </button>
        </SeachWrapper>
      </SearchContainer>
    </Wrapper>
  );
};

export default Header;
