import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProductScreen from './ProductScreen';
import DetailsScreen from './DetailsScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Product">
        <Stack.Screen name="Product" component={ProductScreen} options={{ title: 'Sản phẩm' }} />
        <Stack.Screen name="Details" component={DetailsScreen} options={{ title: 'Chi tiết sản phẩm' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
