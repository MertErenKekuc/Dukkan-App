import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Products from './pages/Products';
import Detail from './pages/Detail'

const Stack = createNativeStackNavigator();

function Router(){

  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ProductsPage" component={Products} options={{
          title:'Dukkan', 
          headerStyle: {backgroundColor: '#ADD8E6'},
          headerTitleStyle: {color: 'black'},
          headerTitleStyle: {fontWeight: 'bold'}
          }}
          />
        <Stack.Screen name="DetailPage" component={Detail} options={{
          title:'Detay', 
          headerStyle: {backgroundColor: '#ADD8E6'},
          headerTitleStyle: {color: 'black'},
          headerTitleStyle: {fontWeight: 'bold'}
          }}
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;