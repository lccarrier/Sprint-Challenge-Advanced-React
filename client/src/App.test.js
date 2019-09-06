import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import App from './App';

test('renders app without crashing', () => {
  render(<App />);
});
 
test('renders data of player', async () => {
  const { findByText } = await render(<App />);
  findByText(/Megan Rapinoe/i);
});  