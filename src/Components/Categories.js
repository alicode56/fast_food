import { View, Text } from 'react-native'
import React from 'react'

const Categories = ({title}) => {
  return (
    <View style={{flexDirection:'row',width:102,height:49,
    borderRadius:100,backgroundColor:
    '#FFE999',justifyContent:'center',
    alignItems:'center',margin:5}}>
   
     <Text style={{fontSize:18,fontWeight:'500',color:'#000000'}}>{title}</Text>
    </View>
  )
}

export default Categories