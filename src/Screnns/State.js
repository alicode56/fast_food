import { View, Text, Button, Image,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Login from './Login'
import Search from '../BottomNavigation/Search'
import Homee from './Homee'
import Favourite from '../BottomNavigation/Favourite'
import Profile from '../BottomNavigation/Profile'
import Header from '../Common.js/Header'


const State = () => {
  const [Btn, setBtn] = useState(1)
  return (
    
    <View style={{ flex: 1 }}>
     

      {
        Btn === 1 ? <Homee /> : null
      }
      {
        Btn === 2 ? <Search /> : null
      }
      {
        Btn === 3 ? <Favourite /> : null
      }
      {
        Btn === 4 ? <Profile/> : null
      }

      <View style={{
        flexDirection: "row",
        justifyContent: 'space-between',
        // backgroundColor: 'red',
        backgroundColor:'white',
        padding: '3%',
        position: 'absolute',
        bottom: 0, width: '100%',
      }} >
        <TouchableOpacity onPress={() => { setBtn(1) }} >
       <Image source={require('../Images/home.png')}
          style={{width:24,height:24,tintColor:'black'}}/>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>{setBtn(2)}}>
          <Image source={require('../Images/search.png')}
          style={{width:24,height:24,tintColor:'black'}}/>
          </TouchableOpacity>
        
          <TouchableOpacity onPress={()=>{setBtn(3)}}>
          <Image source={require('../Images/heart.png')}
          style={{width:24,height:24,tintColor:'black'}}/>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>{setBtn(4)}}>
          <Image source={require('../Images/user.png')}
          style={{width:24,height:24,tintColor:'black'}}/>
          </TouchableOpacity>
      </View>



    </View>
  )
}

export default State