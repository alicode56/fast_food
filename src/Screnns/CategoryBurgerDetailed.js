import { View, Text,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import Custom_detailsbrger from '../Components/Custom_detailsbrger'


const CategoryBurgerDetailed = ({navigation}) => {
  return (

   <View style={{flex:1}}>
     {/* <Text style={{
      fontSize: 30, fontWeight: '900',
      alignSelf: 'center'
    }}>Favourite</Text> */}

    <View style={{
      width: '100%', backgroundColor: '#FFE999',top:4,
      height: 50, flexDirection: 'row', alignItems: 'center'
    }}>
      <TouchableOpacity style={{
        width: 30, height: 30, backgroundColor: 'white', marginLeft: 12,
        alignItems: 'center', justifyContent: 'center', borderRadius: 50
      }}
      onPress={() => navigation.goBack()} >
        <Image source={require('../Images/backbtn.png')}
          style={{ width: 24, height: 24, tintColor: 'black' }} />
      </TouchableOpacity>

      <Text style={{ fontSize: 30, fontWeight: '600', marginLeft: 70 }}>
        Categories</Text>

    </View>

    <Text style={{ fontSize: 25, fontWeight: '600', alignSelf: 'center' }}>
      Burger
    </Text>

    <Custom_detailsbrger onPress={()=>navigation.navigate('Signup')}
    />
    <Custom_detailsbrger/>
    <Custom_detailsbrger/>
    <Custom_detailsbrger/>
    
   </View>
   
  )
}

export default CategoryBurgerDetailed