import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Header2 from './Header2'

const Notifications = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <Header2 title={'Notifications'} />

      <View style={{
        width: 345, height: 122, top: 12, alignSelf: 'center',
        borderRadius: 10, borderWidth: 1, flexDirection: 'row',
        justifyContent: 'center', alignItems: 'center', borderColor: '#ED8812'
      }}>
        <View style={{
          width: 68, height: 68, backgroundColor: '#ED8812',
          borderRadius: 10, justifyContent: 'center'
        }}>
          <Image source={require('../Images/done.png')}
            style={{ width: 46, height: 24, alignSelf: 'center' }} />
        </View>
        <Text style={{ fontSize: 18, fontWeight: '600', left: 12 }}>Order is placed successfully</Text>
      </View>
    </View>
  )
}

export default Notifications