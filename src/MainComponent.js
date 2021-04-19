import {useDispatch, useSelector} from 'react-redux';
import React, {useState} from 'react';
import {changeName} from './store/actions';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';

export const MainComponent = () => {
  const {name, age} = useSelector(store => store);
  const [inputValue, setInput] = useState('ghbdt');
  const dispatch = useDispatch();
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.text}>{`I'm ${name}, and I'm ${age} years old`}</Text>
      <TextInput value={inputValue} onChangeText={setInput} />
      <Button
        title="Save"
        onPress={() => {
          dispatch(changeName(inputValue));
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});
