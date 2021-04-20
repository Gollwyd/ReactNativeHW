import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  ScrollView,
  Image,
} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {SearchBar} from 'react-native-elements';
import {Category} from '../components/Category';

export const MainScreen = () => {
  const [search, updateSearch] = useState('');

  return (
    <>
      <View style={styles.header}>
        <View style={styles.headerMenu}>
          <Ionicons name="menu" size={24} color="white" />
          <Text>Eccomerce Store</Text>
          <Ionicons name="md-cart-outline" size={24} color="white" />
        </View>
        <SearchBar
          placeholder="Search for products..."
          onChangeText={updateSearch}
          value={search}
        />
      </View>
      <Category />
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 5,
    backgroundColor: '#14bdff',
  },
  headerMenu: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
