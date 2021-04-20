import React from 'react';
import {
  FlatList,
  ScrollView,
  StyleSheet,
  View,
  Image,
  Text,
} from 'react-native';

const category = [
  {name: 'Cloth', src: '../../assets/img/category/cloth.jpg'},
  {name: 'Electronics', src: '../../assets/img/category/electronics.jpg'},
];

const CategoryItem = ({item}) => {
  return (
    <View style={styles.categoryItem}>
      <View style={styles.imageWraper}>
        <Image sourse={require('../../assets/img/category/electronics.jpg')} />
      </View>
      <Text>{item.name}</Text>
    </View>
  );
};

export const Category = () => {
  return (
    <ScrollView horizontal={true}>
      <FlatList
        style={styles.category}
        horizontal={true}
        data={category}
        renderItem={({item}) => <CategoryItem item={item}></CategoryItem>}
        keyExtractor={item => item.name}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  category: {padding: 10},
  categoryItem: {padding: 5},
  imageWraper: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 2,
  },
});
