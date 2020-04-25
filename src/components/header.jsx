import React from 'react';

// Material
import { Appbar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Header = () => (
  <Appbar.Header>
    <Appbar.Action icon="menu" />
    <Appbar.Content title="News+" />
    <Icon style={{ marginRight: 10 }} name="bell-outline" size={22} />
    <Icon style={{ marginRight: 10 }} name="magnify" size={22} />
  </Appbar.Header>
);

export default Header;
