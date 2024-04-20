import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Custom_detailsbrger = () => {
    const navigation = useNavigation();
    return (
        <View style={{marginVertical:10}}>
           

<TouchableOpacity    onPress={() => navigation.navigate('Selectedbuyburger')}>
            <View style={{
                width: 340, height: 146, borderRadius: 10, elevation:2,
                backgroundColor: 'white', marginHorizontal: 12,
                flexDirection: 'row',
            }}>
                <View style={{
                    width: '34%',
                    //  backgroundColor: 'red'
                }}>
                    <Image source={require('../Images/barger.png')}
                        style={{ width: 120, height: 143, borderRadius: 5 }} />
                </View>


                <View style={{
                    flexDirection: 'row', width: '66%',
                }}>

                    <View style={{
                        width: '70%', justifyContent: 'center',
                        // backgroundColor: 'yellow',
                    }}>
                        <Text style={{ fontSize: 16, fontWeight: '500', color: '#ED8812', left: 10 }}>MacDonald</Text>
                        <Text style={{ fontSize: 22, fontWeight: '600', color: '#000000', left: 10 }}>Cheese burger</Text>

                        <View style={{ flexDirection: 'row' }}>
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

                        <Text style={{
                            fontSize: 25, fontWeight: '600',
                            color: '#ED8812', left: 10
                        }}>$5.99</Text>
                    </View>

                    <View style={{
                        width: '30%',
                        //  backgroundColor: 'blue' 
                    }}>
                        <TouchableOpacity style={{
                            width: 44, height: 44, backgroundColor: 'white',
                            alignItems: 'center', justifyContent: 'center', top: 10, left: 20,
                            borderWidth: 1, borderRadius: 10
                        }} onPress={() => navigation.navigate('Selectedbuyburger')}>
                            <Image source={require('../Images/heart.png')}
                                style={{ width: 24, height: 24 }} />
                        </TouchableOpacity>

                        <TouchableOpacity style={{
                            width: 44, height: 44, backgroundColor: '#ED8812',
                            top: 33, left: 20, borderWidth: 1, borderRadius: 10
                        }} onPress={() => navigation.navigate('Selectedbuyburger')}>

                            <Text style={{
                                fontSize: 30, fontWeight: '600', color: 'white',
                                textAlign: 'center'
                            }}>+</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </View>
            </TouchableOpacity>
        </View>
    )
}

export default Custom_detailsbrger