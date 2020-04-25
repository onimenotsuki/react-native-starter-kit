import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { ScrollView } from 'react-native';
import MainArticle from './main-article';

const data = [
  {
    imageUri: 'https://picsum.photos/700',
    author: {
      name: 'Pedro Hernández',
    },
    createdAt: 'Hace 2 horas',
  },
];

const MainArticleList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const response = await axios({
        method: 'GET',
        url:
          'https://cdn.contentful.com/spaces/wntngn3gmxa4/environments/master/content_types/article?access_token=Ktex1iiKbVFhH3MHDW-6J6UVkfPWPV_SyNtbR5a9JXw',
      });

      console.log(response.data);
      setArticles(data);
    };

    fetchArticles();
  }, []);

  return (
    <ScrollView
      style={{ marginVertical: 15 }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {articles.map(({ imageUri, author, createdAt }) => (
        <MainArticle
          imageUri={imageUri}
          author={author}
          createdAt={createdAt}
        />
      ))}
    </ScrollView>
  );
};

export default MainArticleList;
