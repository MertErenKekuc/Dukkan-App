// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Products from './pages/Products'
import Details from './pages/Details'

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name="ProductsPage" 
        component={Products}
        options={{
          title: 'Dukkan',
          headerTitleAlign: 'center',
          headerStyle : {backgroundColor: '#a09e9e'},
          headerTintColor: 'black',
        }} />
        <Stack.Screen 
        name="DetailsPage" 
        component={Details} 
        options={{
          title: 'Detay',
          headerTitleAlign: 'center',
          headerStyle : {backgroundColor: '#a09e9e'},
          headerTintColor: 'black',
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;