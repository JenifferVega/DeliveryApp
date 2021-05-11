import React from 'react';
import { createStackNavigator} from '@react-navigation/stack';
import { NavigatioContainer } from '@react-navigation/native';

import {Home, DeliveryForm, DeliveryStatus} from './screens'

const Stack = createStackNavigator();

const App = () => {
  return(
    <NavigatioContainer>
      <Stack.Navigator 
        screenOptions={{
          headerShown: false
        }}
        initialRouteName={"Home"} 
      >
        <Stack.Screen name="Home" component={Home}/>
      </Stack.Navigator>
    </NavigatioContainer>
  )

}
  