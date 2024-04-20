import { View, Text, Image, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Select_brgerHeader = () => {
    const navigation = useNavigation();
    return (
        <View >
            <View style={{
                width: 405, height: 405,
                borderRadius: 30, top: 20, backgroundColor: 'red', right: 10
            }}>
                <ImageBackground source={require('../Images/barger.png')}
                    style={{
                        width: 405, height: 405, borderRightColor: 30, borderWidth: 3,
                        borderRadius: 10
                    }}>
                </ImageBackground>
                <TouchableOpacity style={{
                    width: 30, height: 30, backgroundColor: 'white', marginLeft: 12,
                    alignItems: 'center', justifyContent: 'center', borderRadius: 50,
                    position: 'absolute', top: 35
                }}
                    onPress={() => navigation.goBack()} >
                    <Image source={require('../Images/backbtn.png')}
                        style={{ width: 24, height: 24, tintColor: 'black' }} />
                </TouchableOpacity>

                <TouchableOpacity style={{
                    width: 30, height: 30, backgroundColor: 'white', 
                    borderWidth: .1,alignItems: 'center', justifyContent: 'center', borderRadius:100,
                     position: 'absolute', top: '90%',right:40
                }}
                    onPress={() => navigation.goBack()} >
                    <Image source={require('../Images/heart.png')}
                        style={{ width: 24, height: 24, tintColor: 'black' }} />
                </TouchableOpacity>
            </View>

            <View style={{
                width: '70%', justifyContent: 'space-between', top: 30, flexDirection: 'row'
                // backgroundColor: 'yellow',
            }}>
                <View>
                    <Text style={{ fontSize: 16, fontWeight: '500', color: '#ED8812', left: 10 }}>MacDonald</Text>
                    <Text style={{ fontSize: 22, fontWeight: '600', color: '#000000', left: 10 }}>Cheese burger</Text>
                    <View>
                        
                    </View>
{/* <Image source={require('../Images/stars5.png')}
style={{width:24,height:24,}}/> */}
                    <View style={{ flexDirection: 'row', top: 8 }}>
                        <Image source={require('../Images/starfilled.png')}
                            style={{ width: 17, height: 17, left: 10, }} />
                        <Image source={require('../Images/starfilled.png')}
                            style={{ width: 17, height: 17, left: 13, }} />
                        <Image source={require('../Images/starfilled.png')}
                            style={{ width: 17, height: 17, left: 16, }} />
                        <Image source={require('../Images/starfilled.png')}
                            style={{ width: 17, height: 17, left: 19, }} />
                        <Image source={require('../Images/star.png')}
                            style={{ width: 17, height: 17, left: 21, }} />
                    </View>
                </View>

                <View style={{ flexDirection: 'column', left: 90 }}>
                    <Text style={{
                        fontSize: 18, fontWeight: '400',
                        color: 'black', left: 10
                    }}>Prize</Text>
                    <Text style={{
                        fontSize: 30, fontWeight: '600',
                        color: '#ED8812', left: 10
                    }}>$5.99</Text>
                </View>
            </View>

            <View>

            </View>
            <Text style={{
                fontSize: 20, fontWeight: '600',
                top: 40, left: 12
            }}>details</Text>
            <Text style={{ fontSize: 17, fontWeight: '400', top: 40, left: 12 }}>
                Lorem ipsum dolor sit amet consectetur. Nec
                ut commodo eu quam massa bibendum senectus.
                Congue enim leo placerat luctus id.
            </Text>

        </View>

    )
}

export default Select_brgerHeader