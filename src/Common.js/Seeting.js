import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Custom_Textinput2 from '../Components/Custom_Textinput2'
import Header2 from './Header2'


const Seeting = ({ navigation, text }) => {
  return (
    <View style={{ flex: 1 }}>
    <Header2 title={'Seetings'}/>

     

      <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
        <Custom_Textinput2
          icon={require('../Images/notificatins.png')}
          title={'Notification'} />
      </TouchableOpacity>

       <TouchableOpacity onPress={()=>navigation.navigate('ContactsUs')}>
          <Custom_Textinput2
           
            icon={require('../Images/contact.png')}
           title={'Contact us'} />
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate('HelpFaqs')}>
          <Custom_Textinput2
            placeholder={'Help & FAQ'}
            icon={require('../Images/faqs.png')}
            title={'Help & fAQS'}
            onChangeText={(text)} />
        </TouchableOpacity>

        
    </View>
  )
}

export default Seeting