import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Form from '../form/Form'

describe('Article item component', () => {
  afterEach(() => cleanup());
  it ('renders an article', () => {
    const { asFragment } = render(<Form
      setArticles={() => {}}
      setLoading={() => {}}
    />);

    expect(asFragment()).toMatchSnapshot();
  });
});
