import React from 'react';
import { View, Text, text, TouchableOpacity } from 'react-native';
import CustomTextinput from '../Components/CustomTextinput';
import CustomButton from '../Components/CustomButton';


const Login = ({ navigation }) => {
  return (
    <View style={{ flex: 1, }}>
      <Text style={{
        fontSize: 25,
        textAlign: 'center',
        paddingTop: 157,
        color: "#ED8812",
        fontWeight: 700,
      }}>
        Welcome Back
      </Text>
      <Text style={{
        textAlign: 'center',
        paddingTop: 7,
        color: "#000000",
        fontWeight: 700,

      }}>
        login to your account</Text>

      <Text style={{
        paddingLeft: 40,
        marginTop: 50,
        fontWeight: '600'
      }}>Email</Text>
      <CustomTextinput
        placeholder={'Enter email ID'}
        icon={require('../Images/mail.png')}
        onChangeText={(text)} />

      <Text style={{
        paddingLeft: 40,
        fontWeight: '600',
        marginTop: 20
      }}>Passsword</Text>
      <CustomTextinput
        placeholder={'Enter passsword'}
        icon={require('../Images/pswrd.png')}
        onChangeText={(text)} />

      <TouchableOpacity style={{ alignItems: "flex-end", marginRight: 13,
       paddingTop: 6 }}
       onPress={()=>navigation.navigate('Forgotpassword')}>

        <Text style={{ color: '#ED8812' }}>Forgot passsword</Text>
      </TouchableOpacity>

      <CustomButton title={'login to'}

        Button_View={{ marginTop: '10%' }}
        onPress={() => navigation.navigate('State')} />



      <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'center', marginTop: 'auto' }}>
        <Text style={{ fontSize: 16, color: "#000000" }}>Didn't have account? </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('Signup')}>
          <Text style={{ color: '#ED8812' }}>Register</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};

export default Login;

