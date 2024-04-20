import { View, Text, text, TouchableOpacity } from 'react-native'
import React from 'react'
import CustomTextinput from '../Components/CustomTextinput'
import CustomButton from '../Components/CustomButton'

const Signup = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <Text style={{
        fontSize: 25,
        textAlign: 'center',
        paddingTop: 80,
        color: "#ED8812",
        fontWeight: 700,
      }}>
        Create Account
      </Text>
      <Text style={{
        textAlign: 'center',
        paddingTop: 7,
        color: "#000000",
        fontWeight: 700,

      }}>
        Create your account</Text>

      <Text style={{
        paddingLeft: 40,
        marginTop: 50,
        fontWeight: '600'
      }}>Name</Text>
      <CustomTextinput
        placeholder={'Enter your name'}
        icon={require('../Images/user.png')}
        onChangeText={(text)} />

      <Text style={{
        paddingLeft: 40,
        fontWeight: '600',
        marginTop: 14
      }}>Email</Text>
      <CustomTextinput
        placeholder={'Enter your email'}
        icon={require('../Images/mail.png')}
        onChangeText={(text)} />

      <Text style={{
        paddingLeft: 40,
        marginTop: 14,
        fontWeight: '600'
      }}>Passsword</Text>
      <CustomTextinput
        placeholder={'Enter password'}
        icon={require('../Images/pswrd.png')}
        onChangeText={(text)} />

      <Text style={{
        paddingLeft: 40,
        fontWeight: '600',
        marginTop: 14
      }}>Confirm Passsword</Text>
      <CustomTextinput
        placeholder={'Enter confirm passsword'}
        icon={require('../Images/pswrd.png')}
        onChangeText={(text)} />

      <CustomButton title={'login'}
      onPress={()=>navigation.navigate('Login')} />

      <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'center', marginTop: 'auto' }}>
        <Text style={{ fontSize: 16, color: "#000000" }}>Didn't have account? </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('Login')}>
          <Text style={{ color: '#ED8812' }}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Signup