import React from 'react';
import { ScrollView } from 'react-native';
import LineChart from './linechart';
import Cash from './cash';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Colors from '../../../constants/Colors';

const HomeScreen = () => {
  return (
    <ScrollView>
      <LineChart />
      <Cash />
    </ScrollView>
  )
}

const Home = () => {
  const Stack = createNativeStackNavigator()
  return (
    <Stack.Navigator>
      <Stack.Screen name='Home' component={HomeScreen} options={{
        headerTitle: 'Home',
        headerStyle: {
          backgroundColor: Colors.activeNav
        },
        headerTitleStyle: {
          color: 'white'
        },
        headerTitleAlign: 'center'
      }} />
    </Stack.Navigator>
  );
};

export default Home;