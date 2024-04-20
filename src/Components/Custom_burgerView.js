import { View, Text, Image } from 'react-native'
import React from 'react'

const Custom_burgerView = () => {
    return (
        <View style={{
            width: 224, height: 191,
            borderRadius: 10, borderWidth: 1, backgroundColor: 'white', marginLeft: 12
        }}>
            <Image source={require('../Images/barger.png')}
                style={{
                    width: 224, height: 111, borderTopRightRadius: 8, borderTopLeftRadius: 8
                }} />
            <View style={{
                width: 26, height: 26,
                position: 'absolute', marginStart: 190, borderRadius: 20,
                marginTop: 5, backgroundColor: 'white',
                justifyContent: 'center', alignItems: 'center'
            }}>
                <Image source={require('../Images/heart.png')}
                    style={{
                        width: 20, height: 20,
                        position: 'absolute', tintColor: 'black'
                    }} />

            </View>
            <View style={{ flexDirection: 'row' }}>
                <View style={{ width: '50%' }}>
                    <Text style={{ fontSize: 14, fontWeight: '500', color: '#ED8812', left: 6 }}>McDonald</Text>
                    <Text style={{ fontSize: 16, fontWeight: '600', color: '#000000', left: 6 }}>Cheese burger</Text>
                    <Text style={{ fontSize: 16, fontWeight: '600', color: '#ED8812', left: 6 }}>$5.99</Text>
                </View>
                <View style={{
                    width: '50%', height: 75, flexDirection: 'row',
                    alignItems: 'center', justifyContent: 'center',
                }}>

                    <View style={{
                        backgroundColor: '#ED8812', width: 63,
                        height: 48, flexDirection: 'row', borderRadius: 10,
                        justifyContent: 'center', alignItems: 'center',
                    }}>
                        <Image source={require('../Images/dbiaddwale.png')}
                            style={{ width: 26, height: 26, }} />
                        <Text style={{
                            color: 'white', fontSize: 26,
                            marginLeft: 4
                        }}>+</Text>
                    </View>
                </View>

            </View>

        </View>
    )
}

export default Custom_burgerView