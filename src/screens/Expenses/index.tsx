import React from 'react';
import { ScrollView } from 'react-native';
import PieChart from './piechart';
import Categories from './categories';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AllCategories from '../AllCategories';
import { ExpensesStackParamList } from '../../../types';
import colors from '../../../constants/colors';

const ExpensesPage : React.FC = () => {
  return (
    <ScrollView>
      <PieChart />
      <Categories />
    </ScrollView>
  )
}

const Expenses : React.FC = () => {
  const Stack = createNativeStackNavigator<ExpensesStackParamList>()
  return (
    <Stack.Navigator screenOptions={{animation: 'slide_from_right'}}>
      <Stack.Screen name="Root" component={ExpensesPage} options={{ 
        headerShown: true, 
        headerTitle: 'Expenses',
        headerStyle: {
          backgroundColor: colors.activeNav
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
          backgroundColor: colors.activeNav
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