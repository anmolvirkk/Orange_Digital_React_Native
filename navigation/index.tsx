import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { RootStackParamList, RootTabParamList } from '../types'
import { Feather } from '@expo/vector-icons' 
import Empty from '../src/screens/Empty'
import Expenses from '../src/screens/Expenses'
import { StatusBar } from 'react-native'
import Home from '../src/screens/Home'
import colors from '../constants/colors'

export default function Navigation () {
  return (
    <>
      <StatusBar backgroundColor={colors.activeNav} />
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </>
  )
}

const Stack = createNativeStackNavigator<RootStackParamList>()

const RootNavigator : React.FC = (() => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
})

const BottomTab = createBottomTabNavigator<RootTabParamList>()

const BottomTabNavigator : React.FC = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="home"
      screenOptions={{
        tabBarShowLabel: true,
        tabBarLabelStyle: {
          color: colors.text
        },
        headerShown: false
      }}
    >
      <BottomTab.Screen
        name="home"
        component={Home}
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => <Feather name="home" color={focused ? colors.activeNav : colors.text} size={23} />
        }}
      />
      <BottomTab.Screen
        name="expenses"
        component={Expenses}
        options={{
          title: 'Expenses',
          tabBarIcon: ({ focused }) => <Feather name="pie-chart" color={focused ? colors.activeNav : colors.text} size={23} />
        }}
      />
      <BottomTab.Screen
        name="portfolio"
        component={Empty}
        options={{
          title: 'Portfolio',
          tabBarIcon: ({ focused }) => <Feather name="dollar-sign" color={focused ? colors.activeNav : colors.text} size={23} />
          
        }}
      />
      <BottomTab.Screen
        name="bank_accounts"
        component={Empty}
        options={{
          title: 'Bank Accounts',
          tabBarIcon: ({ focused }) => <Feather name="list" color={focused ? colors.activeNav : colors.text} size={23} />
        }}
      />
      <BottomTab.Screen
        name="more"
        component={Empty}
        options={{
          title: 'More',
          tabBarIcon: ({ focused }) => <Feather name="more-horizontal" color={focused ? colors.activeNav : colors.text} size={23} />
        }}
      />
    </BottomTab.Navigator>
  )
}
