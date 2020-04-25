import React from 'react';
import { Text, ScrollView } from 'react-native';

// Componentes personalizados
import MainArticleList from './main-article-list';
import CategoryList from './category-list';

const categories = [
  'Para ti',
  'Populares',
  'Los más vistos',
  'Lo más reciente',
];

const LastNews = () => (
  <ScrollView style={{ padding: 15, flex: 1 }}>
    <Text
      style={{
        fontSize: 44,
        fontFamily: 'PlayfairDisplay',
        marginTop: 20,
      }}
    >
      Últimas noticias
    </Text>

    <CategoryList categories={categories} />
    <MainArticleList />
  </ScrollView>
);

export default LastNews;
