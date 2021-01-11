import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './src/screens/home';
import Login from './src/screens/login';
import Register from './src/screens/register';
export default function App() {
  const {Navigator, Screen} = createStackNavigator();

 return (
  <NavigationContainer>
    <Navigator initialRouteName='Login'>
      
      <Screen 
      name='Login' 
      component={Login} 
      options={{
        headerShown: false,
      }}
      />

      <Screen 
      name='Home' 
      component={Home}
      options={{
        headerShown: false,
      }}
      />
      
      <Screen 
      name='Register' 
      component={Register} 
      options={{
        headerShown: false,
      }}
      />
    </Navigator>
  </NavigationContainer>
  );
}