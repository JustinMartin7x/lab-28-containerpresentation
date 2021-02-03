import React, { useEffect, useState } from 'react';
import { fetchNews, fetchAll } from '../utils/utils';

export default function App() {

  const [articles, setArticles] = useState([]);



  useEffect(() => {
    let mounted = true;
    fetchAll().then((items) => {
      if(mounted) {
        setArticles(items.articles);
      }
    });
    return () => (mounted = false);
  }, []);

  console.log('THIS IS A CONSOLE LOG', articles);

  return (
    <>
      <h1>Hello Everyone</h1>
    </>
  );
}
