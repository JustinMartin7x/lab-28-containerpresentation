import React from 'react';

export default function ArticleItem({ article }) {
  return (
    <div>
      <h1>{article.title}</h1>
      <p>{article.content}</p>
    </div>
  );
}
