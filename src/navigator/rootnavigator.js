import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Login from '../screens/login';
import Registration from '../screens/registration';
import Dashboard from '../screens/dashboard';
import React from 'react';

const Stack = createStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="login"
        screenOptions={{
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#0080ff',
          },
          headerTintColor: '#ffffff',
          headerTitleStyle: {
            fontSize: 25,
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen
          name="login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="registration"
          component={Registration}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="dashboard"
          component={Dashboard}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
