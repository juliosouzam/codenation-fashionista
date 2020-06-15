import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  margin: 0 20px;
`;

export const NoProductsFound = styled.span`
  font-size: 24px;
  font-weight: bold;
  color: #232529;
  text-align: center;
  margin: 0 auto;
`;

export const Container = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 15px;
  list-style: none;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 910px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 610px) {
    grid-template-columns: repeat(1, 1fr);
  }

  li {
    border-radius: 4px;
    padding: 20px;
    text-align: center;
    position: relative;

    a {
      display: flex;
      flex-direction: column;
      text-decoration: none;

      img {
        align-self: center;
        max-width: 250px;
        transition: all 0.3s;
        margin-bottom: 8px;
        overflow: hidden;
        transition: transform 0.3s ease 0s;

        &:hover {
          transform: scale(1.1);
        }
      }

      > strong {
        font-size: 16px;
        line-height: 20px;
        color: #333;
        margin-top: 5px;
      }
    }
  }
`;

export const Badge = styled.span`
  position: absolute;
  content: '';
  top: 15px;
  right: 0;
  width: 0;
  height: 0;
  border-top: 25px solid #d92027;
  border-bottom: 25px solid transparent;
  border-left: 25px solid #d92027;
  border-right: 25px solid #d92027;
  z-index: 1;

  display: flex;
  justify-content: center;
  align-items: flex-start;

  span {
    margin-top: -25px;
    color: #fff;
    font-size: 18px;
    font-weight: bold;
  }
`;

export const Prices = styled.div``;

export const OldPrice = styled.span`
  font-size: 15px;
  margin: 5px 10px 20px 0;
  color: #333;
  text-decoration: line-through;
`;

export const NewPrice = styled.span`
  font-size: 18px;
  font-weight: bold;
  margin: 5px 0 20px;
  color: #333;
`;
