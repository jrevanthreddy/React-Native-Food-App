import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialCommunityIcons } from 'react-native-vector-icons';

import HomeTab from './HomeTab';
import Search from './Search';
import Orders from './Orders';
import Profile from './Profile';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Home Tab') {
              iconName = 'home-outline';
            } else if (route.name === 'Search') {
              iconName = 'search-web';
            } else if (route.name === 'Orders') {
              iconName = 'credit-card';
            } else if (route.name === 'Profile') {
              iconName = 'account';
            }

            return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#4CAF50',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Home Tab" component={HomeTab} options={{headerShown:false}}/>
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="Orders" component={Orders} />
        <Tab.Screen name="Profile" component={Profile} options={{headerShown:false}} />

      </Tab.Navigator>
  );
};

export default App;
