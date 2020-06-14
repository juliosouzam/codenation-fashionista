import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { lighten } from 'polished';

interface ToogledProps {
  toogled?: boolean;
}

export const Wrapper = styled.nav`
  height: 80px;
  background: #191920;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0 20px;

  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0;
  z-index: 2;
`;

export const Container = styled.header<ToogledProps>`
  display: ${({ toogled }) => (toogled ? 'none' : 'flex')};
  flex: 1;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 20px;

  > a {
    text-decoration: none;
    font-size: 32px;
    color: #fff;
  }
`;

export const SeachWrapper = styled.div<ToogledProps>`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;

  input {
    height: 36px;
    width: 100%;
    max-width: 300px;
    padding: 8px;
    border: 0;
    border-radius: 0;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }

  @media (max-width: 800px) {
    display: ${({ toogled }) => (toogled ? 'flex' : 'none')};
  }

  button {
    height: 36px;
    background: #323232;
    border: 0;
    padding: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    transition: background 0.2s;

    &:hover {
      background: ${lighten(0.05, '#323232')};
    }
  }
`;

export const Actions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SearchButton = styled.button`
  background: transparent;
  border: 0;

  display: none;

  @media (max-width: 800px) {
    display: block;
  }
`;

export const Cart = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: opacity 0.2s;
  position: relative;

  &:hover {
    opacity: 0.7;
  }
`;

export const Badge = styled.span`
  position: absolute;
  content: '';
  width: 18px;
  height: 18px;
  border-radius: 50%;
  top: 0;
  right: 0;
  background: #ce1212;
  text-align: center;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
`;

export const SearchContainer = styled.div<ToogledProps>`
  display: ${({ toogled }) => (toogled ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: 0;
    margin-right: 10px;
  }
`;
