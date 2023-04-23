import React from 'react';
import { ScrollView } from 'react-native';
import PieChart from './piechart';
import Categories from './categories';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AllCategories from '../AllCategories';
import Colors from '../../../constants/Colors';

const ExpensesPage = () => {
  return (
    <ScrollView>
      <PieChart />
      <Categories />
    </ScrollView>
  )
}

const Expenses = () => {
  const Stack = createNativeStackNavigator()
  return (
    <Stack.Navigator screenOptions={{animation: 'slide_from_right'}}>
      <Stack.Screen name="Root" component={ExpensesPage} options={{ 
        headerShown: true, 
        headerTitle: 'Expenses',
        headerStyle: {
          backgroundColor: Colors.activeNav
        },
        headerTitleStyle: {
          color: 'white'
        },
        headerTitleAlign: 'center'
      }} />
      <Stack.Screen name="AllCategories" component={AllCategories}  options={{ 
        headerShown: true, 
        headerTitle: 'Expenses',
        headerStyle: {
          backgroundColor: Colors.activeNav
        },
        headerTitleStyle: {
          color: 'white'
        },
        headerTintColor: 'white'
      }}/>
    </Stack.Navigator>
  );
};

export default Expenses;