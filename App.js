import React from 'react';
import store from './src/store';
import {Provider} from 'react-redux';
import {MainComponent} from './src/MainComponent';

const App = () => {
  return (
    <Provider store={store}>
      <MainComponent />
    </Provider>
  );
};

export default App;
