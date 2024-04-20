// import { View, Text, TextInput, TouchableOpacity, text } from 'react-native'
// import React from 'react'
// import CustomTextinput from '../Components/CustomTextinput'
// import CustomButton from '../Components/CustomButton'

// const Forgotpassword = ({ navigation }) => {
//   return (
//     <View style={{ flex: 1 }}>
//       <Text style={{
//         fontSize: 25,
//         textAlign: 'center',
//         paddingTop: 157,
//         color: "#ED8812",
//         fontWeight: 700,
//       }}>
//         Forgot Password
//       </Text>
//       <Text style={{
//         textAlign: 'center',
//         paddingTop: 7,
//         color: "#000000",
//         fontWeight: '700',

//       }}>
//         Loresum impsum dolor sit amet {'\n'} consectetur</Text>

//       <Text style={{
//         paddingLeft: 40,
//         marginTop: 50,
//         fontWeight: '600'
//       }}>Email</Text>
//       <CustomTextinput
//         placeholder={'Enter email ID'}
//         icon={require('../Images/mail.png')}
//         onChangeText={(text)} />


// <CustomButton onPress={() => {
//   navigation.navigate('Verification ');
// }} title={'Continue'}
// />
//     </View>
//   )
// }

// export default Forgotpassword



import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import CustomTextinput from '../Components/CustomTextinput';
import CustomButton from '../Components/CustomButton';

const Forgotpassword = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <Text style={{
        fontSize: 25,
        textAlign: 'center',
        paddingTop: 157,
        color: "#ED8812",
        fontWeight: '700',
      }}>
        Forgot Password
      </Text>
      <Text style={{
        textAlign: 'center',
        paddingTop: 7,
        color: "#000000",
        fontWeight: '700',
      }}>
        Loresum impsum dolor sit amet {'\n'} consectetur
      </Text>

      <Text style={{
        paddingLeft: 40,
        marginTop: 50,
        fontWeight: '600',
      }}>Email</Text>
      <CustomTextinput
        placeholder={'Enter email ID'}
        icon={require('../Images/mail.png')}
        onChangeText={(text) => {
        }}
      />

      <CustomButton 
        onPress={()=>navigation.navigate('Verification')}
        title={'Continue'}
           />



        
    </View>
  );
};

export default Forgotpassword;
