import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native'
import React from 'react'



const Search = () => {
  return (
    <View style={{ flex: 1 }}>
      <Text style={{ fontSize: 30, fontWeight: '600', alignSelf: 'center' }}>
        Search</Text>
      <View style={{ flexDirection: 'row', marginLeft: 8 }}>
        <View style={{}}>
          <TextInput style={{
            width: 279, height: 47, borderWidth: .5,
            borderColor: '#ED8812', borderRadius: 10
          }}>search</TextInput>
        </View>

        <View style={{
          width: '18%', backgroundColor: '#ED8812',
          borderRadius: 10, marginLeft: 6, justifyContent: 'center',
          alignItems: 'center',
        }}>
          <Image source={require('../Images/search.png')}
            style={{ width: 26, height: 26, tintColor: 'white' }} />
        </View>

      </View>
      <View style={{
        flexDirection: 'row', justifyContent: 'space-between',
        marginHorizontal: 8, marginTop: 8
      }}>
        <Text style={{ fontSize: 14, fontWeight: '600' }}>Recents serach</Text>
        <Text style={{ fontSize: 18, fontWeight: '600', color: '#ED8812' }}>Clear</Text>
      </View>

      <Text style={{
        fontSize: 18, fontWeight: '600', color: 'black',
        marginLeft: 12
      }}>Burger</Text>
      <Text style={{
        fontSize: 18, fontWeight: '600', color: 'black',
        marginLeft: 12, marginTop: 4
      }}>Cheese Burger</Text>

    </View>
  )
}

export default Search