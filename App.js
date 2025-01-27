import * as React from 'react';
import { View, Text } from 'react-native';
import MainNavigator from './src/config/navigation';

import { Provider } from 'react-redux'
import { store } from './src/store'

// import 'react-native-gesture-handler'; 

export default function App() {
  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  )
}
