import React from 'react';
import { View, Text, text, TouchableOpacity } from 'react-native';
import CustomTextinput from '../Components/CustomTextinput';
import CustomButton from '../Components/CustomButton';


const CreatenewPassword = ({ navigation })=> {
  return (
    <View style={{ flex: 1, }}>
      <Text style={{
        fontSize: 25,
        textAlign: 'center',
        paddingTop: 127,
        color: "#ED8812",
        fontWeight: 700,
      }}>
        Create Password 
      </Text>
      <Text style={{
        textAlign: 'center',
        paddingTop: 7,
        color: "#000000",
        fontWeight: 700,

      }}>
        Create Strong Password</Text>

      <Text style={{
        paddingLeft: 40,
        marginTop: 50,
        fontWeight: '600'
      }}>Password</Text>
      <CustomTextinput
        placeholder={'Enter new Pasword'}
        icon={require('../Images/pswrd.png')}
        onChangeText={(text)} />

      <Text style={{
        paddingLeft: 40,
        fontWeight: '600',
        marginTop: 20
      }}> Confirm Passsword</Text>
      <CustomTextinput
        placeholder={'Enter Storing passsword'}
        icon={require('../Images/pswrd.png')}
        onChangeText={(text)} />

      <CustomButton title={'login'}
       onPress={()=>navigation.navigate('EmailVerification')}
       />
    







      
    </View>
  );
};

export default CreatenewPassword;

