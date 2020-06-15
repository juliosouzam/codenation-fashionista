import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import MockAdapter from 'axios-mock-adapter';
import api from '../services/api';
import App from '../App';

const apiMock = new MockAdapter(api);

const wait = (amount = 0): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, amount));
};

const actWait = async (amount = 0): Promise<void> => {
  await act(async () => {
    await wait(amount);
  });
};

describe('Header', () => {
  it('should be abel to render a header component', () => {
    const { getByTestId } = render(<App />);

    expect(getByTestId('header')).toBeTruthy();
  });
});
