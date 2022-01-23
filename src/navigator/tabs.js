import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Dashboard from '../screens/dashboard';
import React from 'react';
import ICHome from '../../assets/icons/ic_home.svg';
import ICHistory from '../../assets/icons/ic_history.svg';
import ICProfile from '../../assets/icons/ic_profile.svg';
import ICGift from '../../assets/icons/ic_gift.svg';
import ICUp from '../../assets/icons/ic_up.svg';
import {TouchableOpacity, View} from 'react-native';
import colors from '../utils/colors';

const Tab = createBottomTabNavigator();

const customTabBarStyle = {
  activeTintColor: '#0091EA',
  inactiveTintColor: 'gray',
  style: {backgroundColor: 'white'},
};

const CustomTabBarButton = ({children, onPress}) => (
  <TouchableOpacity
    style={{
      top: -30,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
    <View
      style={{
        width: 65,
        height: 65,
        borderRadius: 35,
        backgroundColor: colors.primary,
      }}>
      {children}
    </View>
  </TouchableOpacity>
);

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
      }}>
      <Tab.Screen
        name="a"
        component={Dashboard}
        options={{
          tabBarIcon: ({focused}) => <ICHome width={'22'} height={'22'} />,
        }}
      />
      <Tab.Screen
        name="b"
        component={Dashboard}
        options={{
          tabBarIcon: ({focused}) => <ICHistory width={'22'} height={'22'} />,
        }}
      />
      <Tab.Screen
        name="c"
        component={Dashboard}
        options={{
          tabBarIcon: ({focused}) => <ICUp width={'22'} height={'22'} />,
          tabBarButton: props => <CustomTabBarButton {...props} />,
        }}
      />

      <Tab.Screen
        name="cc"
        component={Dashboard}
        options={{
          tabBarIcon: ({focused}) => <ICProfile width={'22'} height={'22'} />,
        }}
      />
      <Tab.Screen
        name="s"
        component={Dashboard}
        options={{
          tabBarIcon: ({focused}) => <ICGift width={'22'} height={'22'} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
