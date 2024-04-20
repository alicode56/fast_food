import { View, Text } from 'react-native'
import React from 'react'
import Header2 from './Header2'
import Custom_Textinput2 from '../Components/Custom_Textinput2'
import CustomButton from '../Components/CustomButton'
import CustomTextinput from '../Components/CustomTextinput'

const ContactsUs = ({navigation}) => {
  return (
    <View>
     <Header2 title={'Contact us'}/>
     <Text style={{fontSize:20,fontWeight:'500',left:33,top:12,marginBottom:10}}>Name</Text>
     <CustomTextinput
     placeholder={'Enter your name'}/>
     <Text style={{fontSize:20,fontWeight:'500',left:33,top:12,marginBottom:10}}>Email</Text>
     <CustomTextinput
     placeholder={'Enter your Email'}/>
     <Text style={{fontSize:20,fontWeight:'500',left:33,top:12,marginBottom:10}}>Message</Text>
     <CustomTextinput
     placeholder={'Entur yor Message'}/>

     <CustomButton title={'Send'}/>

    </View>
  )
}

export default ContactsUs