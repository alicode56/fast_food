import { View, Text, TouchableOpacity, Image, ScrollView, } from 'react-native'
import React, { useState } from 'react'
import Header from '../Common.js/Header'
import Categories from '../Components/Categories'
import Custom_burgerView from '../Components/Custom_burgerView'
import { useNavigation } from '@react-navigation/native'

const Homee = () => {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <Header />


      <Text style={{
        fontSize: 20, fontWeight: '600',
        marginTop: 15,
        color: '#000000',
        marginLeft: 12,
        marginBottom: 6
      }}>
        Recommended</Text>

      <View style={{
        width: '93%',
        height: 160,
        backgroundColor: '#FFE999',
        alignSelf: 'center',
        borderRadius: 30,
        flexDirection: 'row',
      }}>
        <View style={{
          // backgroundColor: 'red',
          width: '50%',

        }}>
          <Text style={{
            fontWeight: '900',
            fontSize: 22,
            textAlign: 'center',
            top: 12
          }}>Full Special
            Spagitti</Text>
          <TouchableOpacity style={{
            backgroundColor: 'black',
            padding: 13,
            borderRadius: 20,
            width: 110, marginTop: 25,
            alignSelf: 'center'
          }} onPress={() => navigation.navigate('CategoryBurgerDetailed')}>
            <Text style={{
              color: 'white',
              textAlign: 'center', fontSize: 18
            }} >
              Order</Text>
          </TouchableOpacity>
        </View>

        <View style={{
          width: '45%',


        }}>
          <Image source={require('../Images/spagitti.png')}
            style={{ width: '110%', height: '100%' }} />

          <TouchableOpacity style={{
            backgroundColor: '#ED8812',
            padding: 13,
            borderTopStartRadius: 20,
            borderBottomLeftRadius: 20,
            width: 110, marginTop: 30,
            position: 'absolute',
            left: 73

          }} >
            <Text style={{
              color: 'white',
              textAlign: 'center',
              fontSize: 18,
            }}>20% Off
            </Text>
          </TouchableOpacity>

        </View>

      </View>
      <ScrollView>
        <View>
          <Text style={{
            fontSize: 18, fontWeight: '600',
            marginTop: 8, marginLeft: 10
          }}>
            Catgories</Text>
        </View>

        <View style={{ flexDirection: 'row', marginVertical: 12 }}>
          <ScrollView horizontal={true}>
            <TouchableOpacity
              onPress={() => navigation.navigate('CategoryBurgerDetailed')}
            >
              <Categories title={'barger'} />
            </TouchableOpacity>

            <Categories title={'piza'} />
            <Categories title={'chiken piza'} />
            <Categories title={'chiken brgr'} />
          </ScrollView>
        </View>

        {/* <TouchableOpacity style={{width:90,backgroundColor:'red',left:12}}
      onPress={()=>navigation.navigate('Signup')}>
        <Text style={{fontSize:30}}>Button</Text>
      </TouchableOpacity> */}

        <Text style={{
          fontSize: 18, fontWeight: '600',
          marginLeft: 12
        }}>
          Most Selling</Text>
        {/* <View> */}



        <View style={{
          flexDirection: 'row', marginVertical: 12,
        }}>
          <ScrollView horizontal={true}>

            <Custom_burgerView />
            <Custom_burgerView />
            <Custom_burgerView />
          </ScrollView>
        </View>

        <Text style={{
          fontSize: 18, fontWeight: '600',
          marginLeft: 12
        }}>
          Most Selling</Text>
        <View style={{
          flexDirection: 'row', marginVertical: 20,bottom:10
        }}>
          <ScrollView horizontal={true}>

            <Custom_burgerView />
            <Custom_burgerView />
            <Custom_burgerView />
          </ScrollView>
        </View>
      </ScrollView>

     



    </ScrollView >
  )
}

export default Homee






