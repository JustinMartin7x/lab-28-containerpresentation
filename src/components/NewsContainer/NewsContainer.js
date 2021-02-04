import React, { useState } from 'react';
import Form from '../form/Form';
import ArticleList from '../articleList/ArticleList';

export default function NewsContainer() {
  const [articles, setArticles] = useState([]);
  const [Loading, setLoading] = useState(true);
  return (
    <>
      <Form setArticles={setArticles} setLoading={setLoading} />
      <ArticleList articles={articles} />
    </>
  );
}
