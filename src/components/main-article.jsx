import React from 'react';

// React Native
import { View, StyleSheet, Dimensions } from 'react-native';

// Material Design
import { Surface, Card, Avatar } from 'react-native-paper';

const styles = StyleSheet.create({
  surface: {
    padding: 0,
    width: Dimensions.get('window').width - 40,
    elevation: 4,
    borderRadius: 20,
  },
});

const MainArticle = ({ author, createdAt, imageUri }) => (
  <View style={{ marginBottom: 30, marginTop: 15, marginRight: 30 }}>
    <Surface style={styles.surface}>
      <Card style={{ borderRadius: 20 }}>
        <Card.Cover
          style={{ borderTopEndRadius: 20, borderTopStartRadius: 20 }}
          source={{ uri: imageUri }}
        />
        <Card.Title
          style={{ borderBottomEndRadius: 20, borderBottomStartRadius: 20 }}
          title={author.name}
          subtitle={createdAt}
          left={() => (
            <Avatar.Image
              size={40}
              source={{ uri: 'https://i.pravatar.cc/300' }}
            />
          )}
        />
      </Card>
    </Surface>
  </View>
);

export default MainArticle;
