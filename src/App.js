/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import {Store} from './redux/store';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './screens/login';
import Registration from './screens/registration';
import Dashboard from './screens/dashboard';
import Rootnavigator from './navigator/rootnavigator';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={Store}>
      <Rootnavigator />
    </Provider>
  );
};

export default App;
