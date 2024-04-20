import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import Header2 from './Header2'
import Custom_Textinput2 from '../Components/Custom_Textinput2'


const HelpFaqs = () => {
  return (
    <View>
      <Header2 title={'Help & FAQS'} />
<TouchableOpacity>
      <Custom_Textinput2
        title={'How do i update my App'}
        img={require('../Images/newtab.png')}/>
        </TouchableOpacity>
      <Text style={{ fontSize: 16, fontWeight: '400', align: 'center', left: 35, marginRight: 12 }}>
        Lorem ipsum dolor sit amet consectetur. Suspendisse
        elementum laoreet viverra nec in. Aliquet aliquet
        augue cras cursus posuere.
      </Text>

      <TouchableOpacity>
      <Custom_Textinput2
        title={'How do i update my App'}
        img={require('../Images/newtab.png')} />
      </TouchableOpacity>
      <TouchableOpacity>
      <Custom_Textinput2
         title={'How do i update my App'}
        img={require('../Images/newtab.png')} />
      </TouchableOpacity>
   
    
    </View>
  )
}

export default HelpFaqs