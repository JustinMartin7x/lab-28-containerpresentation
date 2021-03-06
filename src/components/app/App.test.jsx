import React from 'react';
import { render, cleanup } from '@testing-library/react';
import App from '../app/App';

describe('App component', () => {
  afterEach(() => cleanup());
  it('renders App', () => {
    const { asFragment } = render(<App />);



    
    expect(asFragment(<App />)).toMatchSnapshot();
  });
});
