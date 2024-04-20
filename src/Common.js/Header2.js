import { View, Text,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function Header2({title,goBack}) {
    const navigation= useNavigation();
  return (
    <View style={{ flexDirection: 'row', marginTop: 12 }}>
    <TouchableOpacity style={{
      width: 41, height: 41, marginLeft: 12,
      alignItems: 'center', justifyContent: 'center', borderRadius: 50,
    }}
      onPress={() => navigation.goBack()} >
      <Image source={require('../Images/backbtn.png')}
        style={{ width: 26, height: 26, tintColor: 'black' }} />
    </TouchableOpacity>
    <Text style={{ fontSize: 24, fontWeight: '600', marginLeft: 80 }}>{title}</Text>
  </View>
  )
}