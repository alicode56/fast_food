import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react';
import CustomTextinput from '../Components/CustomTextinput'
import Custom_Textinput2 from '../Components/Custom_Textinput2';
import { useNavigation } from '@react-navigation/native';


const Profile = ({ text, }) => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1 }}>
      <Text style={{ fontSize: 30, fontWeight: '600', alignSelf: 'center' }}>
        Profile</Text>
      <Image source={require('../Images/dp.png')}
        style={{ width: 115, height: 115, alignSelf: 'center' }} />
      <Text style={{ fontSize: 25, fontWeight: '600', left: 134 }}>
        Wade Warren</Text>
      <Text style={{ fontSize: 20, fontWeight: '400', left: 84 }}>
        WadeWarren@example.com </Text>

      <View style={{ marginTop: 30 }}>
        <TouchableOpacity onPress={() => navigation.navigate('EditdProfile')}>
          <Custom_Textinput2 
    
          icon={require('../Images/user2.png')}
           img={require('../Images/frwrd.png')}
           title={'Edit profile'}
             />
            
        </TouchableOpacity>

        <TouchableOpacity >
          <Custom_Textinput2
            placeholder={'Orders'}
            icon={require('../Images/order.png')}
             img={require('../Images/frwrd.png')}
            title={'Orders'} />
        </TouchableOpacity>


        <TouchableOpacity onPress={() => navigation.navigate('Seeting')}>
          <Custom_Textinput2
            placeholder={'Seeting'}
            icon={require('../Images/seeting2.png')}
            img={require('../Images/frwrd.png')}
           title={'Seeting'}
             />
        </TouchableOpacity>


        <TouchableOpacity>
         <Custom_Textinput2
         icon={require('../Images/logout.png')}
         title={'Logout'}/>
        </TouchableOpacity>
      
     

      </View>

    </View>
  )
}

export default Profile