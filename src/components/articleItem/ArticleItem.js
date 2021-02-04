import React from 'react';
import PropTypes from 'prop-types';

export default function ArticleItem({ article }) {
  return (
    <div>
      <h1>{article.title}</h1>
      <p>{article.author}</p>
      <p>{article.content}</p>
    </div>
  );
}

ArticleItem.propTypes = {
  article: PropTypes.object,
};
