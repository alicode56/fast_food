import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Login from '../Screnns/Login';
import Signup from '../Screnns/Signup';
import Main from '../BottomNavigation/Main';

const Tab = createBottomTabNavigator();

const BottomNav = ({navigation}) => {
  return (
   
   <Tab.Navigator>
        <Tab.Screen name='Login' component={Login} />
        <Tab.Screen name='Login1' component={Signup} />
        <Tab.Screen name='Login2' component={Main} />
        <Tab.Screen name='Login3' component={Login} />
        <Tab.Screen name='Login4' component={Login} />
       
    </Tab.Navigator>
  )
}

 export default BottomNav

// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// const Tab = createBottomTabNavigator();

// function MyTabs() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Home" component={HomeScreen} />
//       <Tab.Screen name="Settings" component={SettingsScreen} />
//     </Tab.Navigator>
//   );
// }