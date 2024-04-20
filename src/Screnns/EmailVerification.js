import { View, Text, TouchableOpacity, Image } from 'react-native'
import CustomButton from '../Components/CustomButton'
import React from 'react'

const EmailVerification = ({ navigation }) => {
    return (
        <View style={{ flex: 1 }}>
            <Image source={require('../Images/verifymail.png')}
                style={{ width: 410, height: 410, alignSelf: 'center',
                 marginTop: 50, }} />


            <Text style={{
                fontSize: 25,
                textAlign: 'center',
                // paddingTop: 127,
                color: "#ED8812",
                fontWeight: 700,
            }}>
                Email Verification
            </Text>
            <Text style={{
                textAlign: 'center',
                paddingTop: 7,
                color: "#000000",
                fontWeight: 700,

            }}>
                Lorem ipsum dolor sit amet consectetur.{'\n'}
                Turpis senectus egestas praesent{'\n'}
                aliquam enim condimentum.</Text>


            <CustomButton title={'login'}
                onPress={() => navigation.navigate('State')} />    
        </View>
    )
}

export default EmailVerification