import React from 'react';
import ArticleItem from '../articleItem/ArticleItem';
import PropTypes from 'prop-types';

export default function ArticleList({ articles }) {
  console.log('THIS IS A CONSOLE LOG', articles);

  return (
    <ul>
      {articles.map((article) => (
        <li key={article.id + Date.now()}>
          <ArticleItem article={article} />
        </li>
      ))}
    </ul>
  );
}

ArticleList.propTypes = {
  articles: PropTypes.array,
};
