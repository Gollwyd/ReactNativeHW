import {useDispatch, useSelector} from 'react-redux';
import React, {useState} from 'react';
import {changeName} from './store/actions';
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {MainScreen} from './screens/MainScreen';
import {LoginScreen} from './screens/LoginScreen';
import {ProductDetailsScreen} from './screens/ProductDetailsScreen';
import {RegistrationScreen} from './screens/RegistrationScreen';

export const MainComponent = () => {
  const [currentScreen, setScreen] = useState('MainScreen');
  // const {name, age} = useSelector(store => store);
  // const [inputValue, setInput] = useState('ghbdt');
  // const dispatch = useDispatch();
  // const submitNewName = () => {
  //   dispatch(changeName(inputValue));
  // };
  const renderScreen = () => {
    switch (currentScreen) {
      case 'MainScreen':
        return <MainScreen />;
      case 'LoginScreen':
        return <LoginScreen />;
      case 'ProductDetailsScreen':
        return <ProductDetailsScreen />;
      case 'RegistrationScreen':
        return <RegistrationScreen />;

      default:
        return <MainScreen />;
    }
  };
  return (
    <ScrollView>
      <View style={styles.mainContainer}>
        <MainScreen />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
  },
});
