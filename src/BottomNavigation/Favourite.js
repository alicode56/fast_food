import { View, Text, Image } from 'react-native'
import React from 'react'
import Custom_detailsbrger from '../Components/Custom_detailsbrger'

const Favourite = ({ navigation }) => {
  return (


    <View style={{ flex: 1, }}>
      <Text style={{ fontSize: 30, fontWeight: '600', alignSelf: 'center' }}>
        Favourite</Text>
      <Text style={{ fontSize: 18, fontWeight: '500', left: 12, marginTop: 12, bottom: 7 }}>
        2items</Text>
      <View>
      <Custom_detailsbrger />
      <Custom_detailsbrger />
      </View>
      
    </View>

  )
}

export default Favourite