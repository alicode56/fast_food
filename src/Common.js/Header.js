import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{
        width: '100%',
        height: 70,
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        // backgroundColor: 'red',
      }}>
        <Image source={require('../Images/dp.png')}
          style={{ width: 50, height: 50, marginRight: '40%' }} />

        <TouchableOpacity style={{
          // flexDirection:'row',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Image source={require('../Images/cart.png')}
            style={{ width: 80, height: 35 }} />

        </TouchableOpacity>



      </View>
      {/* <View style={{
        width: '100%',
        height: 80,
        backgroundColor: 'yellow',
        bottom: 0,
        marginTop: '160%',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        
      }}>

        <TouchableOpacity>
          <Image source={require('../Images/home.png')}
          style={{width:24,height:24}}/>

        </TouchableOpacity>

        <TouchableOpacity>
          <Image source={require('../Images/home.png')}
          style={{width:24,height:24}}/>

        </TouchableOpacity>

        <TouchableOpacity>
          <Image source={require('../Images/home.png')}
          style={{width:24,height:24}}/>

        </TouchableOpacity>

        <TouchableOpacity>
          <Image source={require('../Images/home.png')}
          style={{width:24,height:24}}/>

        </TouchableOpacity>

      </View> */}

    </View>
  )
}

export default Header


// <View style={{
//     width: '100%',
//     height: 70,
//     justifyContent: 'space-around',
//     alignItems: 'center',
//     flexDirection: 'row',
//     borderBottomWidth: 0.2,
//     borderBottomColor: '#BeBeBe',
//     backgroundColor: '#fff',
// }}>
//     <Text
//         style={{
//             fontWeight: '600',
//             fontSize: 20,
//             color: '#000',
//             marginLeft: 1,
//         }}>GroceryApp
//     </Text>

//     <TouchableOpacity
//         style={{
//             marginRight: 20,
//             justifyContent: 'center',

//         }}>
//         <Text>Mode</Text>

//     </TouchableOpacity>
// </View>