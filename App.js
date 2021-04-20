import React, {useState} from 'react';
import store from './src/store';
import {Provider} from 'react-redux';
import {MainComponent} from './src/MainComponent';
import AppLoading from 'expo-app-loading';

const App = () => {
  const [isReady, setReady] = useState(false);

  if (!isReady) {
    return (
      <AppLoading
        startAsync={() => console.log('loadin fonts')}
        onFinish={() => setReady(true)}
        onError={error => console.log(error)}
      />
    );
  }

  return (
    <Provider store={store}>
      <MainComponent />
    </Provider>
  );
};

export default App;
