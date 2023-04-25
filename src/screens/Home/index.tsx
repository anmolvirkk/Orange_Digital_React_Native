import React from 'react';
import { ScrollView } from 'react-native';
import LineChart from './linechart';
import Cash from './cash';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeStackParamList } from '../../../types';
import colors from '../../../constants/colors';

const HomeScreen: React.FC = () => {
  return (
    <ScrollView>
      <LineChart />
      <Cash />
    </ScrollView>
  )
}

const Home: React.FC = () => {
  const Stack = createNativeStackNavigator<HomeStackParamList>()
  return (
    <Stack.Navigator>
      <Stack.Screen name='Home' component={HomeScreen} options={{
        headerTitle: 'Home',
        headerStyle: {
          backgroundColor: colors.activeNav
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