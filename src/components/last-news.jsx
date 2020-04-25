import React from 'react';
import { Text, ScrollView, View } from 'react-native';

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

    <ScrollView
      horizontal
      style={{ marginVertical: 20, paddingVertical: 20 }}
      showsHorizontalScrollIndicator={false}
    >
      <View>
        <Text
          style={{
            fontSize: 16,
            fontFamily: 'Montserrat-SemiBold',
            paddingRight: 20,
          }}
        >
          Para ti
        </Text>
      </View>
      <View>
        <Text
          style={{
            fontSize: 16,
            fontFamily: 'Montserrat',
            paddingRight: 20,
          }}
        >
          Populares
        </Text>
      </View>

      <View>
        <Text
          style={{
            fontSize: 16,
            fontFamily: 'Montserrat',
            paddingRight: 20,
          }}
        >
          Los más vistos
        </Text>
      </View>

      <View>
        <Text
          style={{
            fontSize: 16,
            fontFamily: 'Montserrat',
            paddingRight: 20,
          }}
        >
          Lo más reciente
        </Text>
      </View>
    </ScrollView>
  </ScrollView>
);

export default LastNews;
