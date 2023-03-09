import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

import Home from '../components/Home';
import Product from '../components/Product';
import ProductDetail from '../components/ProductDetail';

function MyStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Product" component={Product} />
            <Stack.Screen name="ProductDetail" component={ProductDetail} />
        </Stack.Navigator>
    );
}


export default function RootNavigation() {
    return (
        <NavigationContainer>
            <MyStack />
        </NavigationContainer>
    );
}