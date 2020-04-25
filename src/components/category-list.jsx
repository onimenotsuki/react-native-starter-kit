import React from 'react';

import { ScrollView, View, Text } from 'react-native';

const CategoryList = ({ categories }) => (
  <ScrollView
    horizontal
    style={{ marginBottom: 10, marginTop: 20, paddingVertical: 20 }}
    showsHorizontalScrollIndicator={false}
  >
    {categories.map((category, index) => (
      <View key={index}>
        <Text
          style={{
            fontSize: 16,
            fontFamily: 'Montserrat-SemiBold',
            paddingRight: 20,
          }}
        >
          {category}
        </Text>
      </View>
    ))}
  </ScrollView>
);

export default CategoryList;
