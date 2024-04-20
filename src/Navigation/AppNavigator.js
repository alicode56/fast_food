import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../Screnns/Login';
import Signup from '../Screnns/Signup';
import Forgotpassword from '../Screnns/Forgotpassword';
import Verification from '../Screnns/Verification';
import CreatenewPassword from '../Screnns/CreatenewPassword';
import EmailVerification from '../Screnns/EmailVerification';
import Homee from '../Screnns/Homee';
import BottomNav from './BottomNav';
import State from '../Screnns/State';
import CategoryBurgerDetailed from '../Screnns/CategoryBurgerDetailed';
import Selectedbuyburger from '../Screnns/Selectedbuyburger';
import EditdProfile from '../Common.js/EditdProfile';
import Seeting from '../Common.js/Seeting';
import Notifications from '../Common.js/Notifications';
import ContactsUs from '../Common.js/ContactsUs';
import HelpFaqs from '../Common.js/HelpFaqs';
import Profile from '../BottomNavigation/Profile';



const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    return (
        <View style={{ flex: 1 }}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        options={{ headerShown: false }}
                        name="Login" component={Login}
                    />
                    <Stack.Screen options={{ headerShown: false }}
                        name='Signup' component={Signup}
                    />
                    <Stack.Screen options={{ headerShown: false }}
                        name='Forgotpassword' component={Forgotpassword}
                    />
                    <Stack.Screen options={{ headerShown: false }}
                        name='Verification' component={Verification}
                    />
                    <Stack.Screen options={{ headerShown: false }}
                        name='CreatenewPassword' component={CreatenewPassword} />

                    <Stack.Screen options={{ headerShown: false }}
                        name='EmailVerification' component={EmailVerification} />

                    <Stack.Screen options={{ headerShown: false }}
                        name='Homee' component={Homee} />

                    <Stack.Screen options={{ headerShown: false }}
                        name='State' component={State} />
                    <Stack.Screen options={{ headerShown: false }}
                        name='CategoryBurgerDetailed' component={CategoryBurgerDetailed} />

                    <Stack.Screen options={{ headerShown: false }}
                        name='Selectedbuyburger' component={Selectedbuyburger} />

                    <Stack.Screen options={{ headerShown: false }}
                        name='EditdProfile' component={EditdProfile} />

                    <Stack.Screen options={{ headerShown: false }}
                        name='Seeting' component={Seeting} />

                        <Stack.Screen options={{headerShown:false}}
                        name='Notifications' component={Notifications}/>

                        <Stack.Screen options={{headerShown:false}}
                        name='ContactsUs' component={ContactsUs}/>

                        <Stack.Screen options={{headerShown:false}}
                        name='HelpFaqs' component={HelpFaqs}/>

                        <Stack.Screen options={{headerShown:false}}
                        name='Profile' component={Profile}/>



                </Stack.Navigator>
            </NavigationContainer>
        </View>
    );
};

export default AppNavigator;








// import { View, Text } from 'react-native'
// import React from 'react'
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Login from '../Screnns/Login';

// const Stack = createNativeStackNavigator();
// const AppNavigator = () => {
//     return (
//         <View>
//             <NavigationContainer>
//             <Stack.Navigator>
//                 <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
//             </Stack.Navigator>
//         </NavigationContainer>
//         </View>
//     )
// }

// export default AppNavigator