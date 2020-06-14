import styled, { css } from 'styled-components';

interface SizeProps {
  selected: boolean;
}

export const Container = styled.div`
  display: flex;
  justify-content: left;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const Background = styled.img`
  width: 100%;
  max-width: 600px;
  padding: 20px;
`;

export const Content = styled.div`
  margin: 20px 25px;

  > strong {
    font-size: 24px;
  }

  > span {
    font-size: 16px;
    color: #333;
  }

  div {
    margin-bottom: 15px;

    > strong {
      font-size: 18px;
    }

    > span {
      margin-left: 8px;
      color: #999;
      font-weight: bold;
    }
  }
`;

export const Sizes = styled.div`
  margin-top: 8px;
`;

export const Size = styled.button<SizeProps>`
  font-size: 16px;
  font-weight: bold;
  border: 0;
  padding: 10px;
  border-radius: 5px;
  border: 0.1rem solid #dfdfdf;

  & + button {
    margin-left: 8px;
  }

  ${({ selected }) =>
    selected &&
    css`
      border-color: #212529;
      background: #212529;
      color: #fff;
    `}
`;

export const AddToCartButton = styled.button`
  background: #212529;
  border: 0;
  padding: 10px 50px;
  border-radius: 5px;
  color: #fff;
  font-size: 18px;

  box-shadow: 0 0.2rem 2rem 0 rgba(0, 0, 0, 0.5);
`;

export const Err = styled.p`
  color: #e63946;
  font-size: 14px;
  font-weight: bold;
`;
