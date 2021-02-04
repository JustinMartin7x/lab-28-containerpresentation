import React from 'react';
import { render, cleanup } from '@testing-library/react';
import ArticleItem from '../articleItem/ArticleItem';



describe('Article item component', () => {
  afterEach(() => cleanup());
  it ('renders an article', () => {
    const { asFragment } = render(<ArticleItem
      article = {{
        title: 'hello', 
        author: 'some author',
        description: 'something else described..'
      }}
    />);

    expect(asFragment()).toMatchSnapshot();
  });
});

