



import React, { useRef, useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import CustomButton from '../Components/CustomButton';

const Verification = ({ navigation }) => {
  const [otp, setOtp] = useState(['', '', '', '', '']);
  const inputRef = useRef([]);
  const [showError, setShowError] = useState(false);

  const handleOtpChange = (value, index) => {
    setOtp(prevOtp => {
      const newOtp = [...prevOtp];
      newOtp[index] = value;

      if (value && index < inputRef.current.length - 1) {
        inputRef.current[index + 1].focus();
      }

      if (newOtp.every(pin => pin !== '')) {
        setShowError(false);
      } else {
        setShowError(true);
      }

      return newOtp;
    });
  };

  const handleOtpKeyPress = (event, index) => {
    if (event.nativeEvent.key === 'Backspace' && index > 0) {
      inputRef.current[index - 1].focus();
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <Text
        style={{
          color: 'orange',
          fontWeight: 'bold',
          marginTop: 35,
          fontSize: 35,
          alignSelf: 'center',
          marginTop: '30%'
        }}>
        Verification
      </Text>
      <Text style={{
        alignSelf: 'center', fontSize: 15, marginLeft: 15,
        marginBottom: 24, fontWeight: '600'
      }}>
        Lorem isump dolor sit amet {'\n'}         consectetur
      </Text>


      <View style={styles.Body}>
        <View style={styles.inputContainer}>
          {otp.map((pin, index) => (
            <TextInput
              key={index}
              ref={ref => (inputRef.current[index] = ref)}
              style={[styles.Otp, { borderColor: pin ? '#959595' : '#959595' }]}
              value={pin}
              onChangeText={value => handleOtpChange(value, index)}
              onKeyPress={event => handleOtpKeyPress(event, index)}
              maxLength={1}
              keyboardType="numeric"
              autoFocus={index === 0}
            />
          ))}

        </View>

      </View>
      {/* </ScrollView> */}


      <CustomButton title={'Continue'}
        onPress={() => navigation.navigate('CreatenewPassword')} />

    </View>
  );
};

export default Verification;

const styles = StyleSheet.create({
  Main_Cont: {
    backgroundColor: 'red',
    padding: '3%',
    // flex:1,
    height: '40%',
  },
  Header_Cont: {},
  Logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginVertical: '7%',
  },
  Body: {},
  Forget_Txt: {
    fontSize: 24,
    color: '#000000',
    lineHeight: 30,
    fontWeight: '600',
    marginTop: '10%',
  },
  Detail_Txt: {
    fontSize: 12,

    color: 'black',
    lineHeight: 15,
    marginTop: '2%',
    width: '90%',
  },
  Input_Cont: {
    marginVertical: '7%',
  },
  Input_With_Icon: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#BABABA',
    padding: '1%',
    paddingHorizontal: '3%',
    borderRadius: 10,
  },
  Sms_Icon: {
    width: 10,
    height: 10,
    resizeMode: 'contain',
    marginRight: '2%',
  },

  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    alignSelf: 'center',
  },
  Otp: {
    width: 60,
    height: 55,
    backgroundColor: 'white',
    marginBottom: '3%',
    justifyContent: 'center',
    textAlign: 'center',
    borderRadius: 10,
    borderColor: 'orange',
    elevation: 1,
    borderWidth: 0.5,
    fontSize: 16,
    color: '#000000',

  },
  input: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderRadius: 4,
    marginHorizontal: 5,
    textAlign: 'center',
    fontSize: 16,
  },

  // Btn_Cont: {
  //   marginVertical: '3%',
  // },
});























// import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
// import React from 'react'
// import CustomButton from '../Components/CustomButton'

// const Verification = ({ navigation }) => {
//   return (
//     <View style={{ flex: 1 }}>
//       <Text style={{
//         fontSize: 25,
//         textAlign: 'center',
//         paddingTop: 157,
//         color: "#ED8812",
//         fontWeight: '700',
//       }}>
//         Verification
//       </Text>
//       <Text style={{
//         textAlign: 'center',
//         paddingTop: 7,
//         color: "#000000",
//         fontWeight: '700',
//       }}>
//         Loresum impsum dolor sit amet {'\n'} consectetur
//       </Text>

//       {/* <View
//         style={{ flexDirection: 'row', justifyContent: 'space-between', paddingRight: 30, paddingLeft: 30, marginTop: 20 }}>
//         <View style={{ width: 52, height: 51, borderRadius: 10, borderWidth: 1, borderColor: '#ED8812' }}></View>
//         <View style={{ width: 52, height: 51, borderRadius: 10, borderWidth: 1, borderColor: '#ED8812' }}></View>
//         <View style={{ width: 52, height: 51, borderRadius: 10, borderWidth: 1, borderColor: '#ED8812' }}></View>
//         <View style={{ width: 52, height: 51, borderRadius: 10, borderWidth: 1, borderColor: '#ED8812' }}></View>
//         <View style={{ width: 52, height: 51, borderRadius: 10, borderWidth: 1, borderColor: '#ED8812' }}></View>
//       </View> */}










// cons Verification = ({navigation}) => {
//   const [otp, setOtp] = useState(['', '', '', '']);
//   const inputRef = useRef([]);
//   const [showError, setShowError] = useState(false);

//   const handleOtpChange = (value, index) => {
//     setOtp(prevOtp => {
//       const newOtp = [...prevOtp];
//       newOtp[index] = value;

//       if (value && index < inputRef.current.length - 1) {
//         inputRef.current[index + 1].focus();
//       }

//       if (newOtp.every(pin => pin !== '')) {
//         setShowError(false);
//       } else {
//         setShowError(true);
//       }

//       return newOtp;
//     });
//   };

//   const handleOtpKeyPress = (event, index) => {
//     if (event.nativeEvent.key === 'Backspace' && index > 0) {
//       inputRef.current[index - 1].focus();
//     }
//   };

//   return (
//     <View style={{flex:1}}>
//       <Text
//         style={{
//           color: 'orange',
//           fontWeight: 'bold',
//           marginTop: 35,
//           fontSize: 35,
//           alignSelf: 'center',
//         }}>
//         Verification
//       </Text>
//       <Text style={{alignSelf: 'center', fontSize: 15, marginLeft: 15}}>
//         Lorem isump dolor sit amet {'\n'} consectetur
//       </Text>
//       <ScrollView contentContainerStyle={styles.Main_Cont}>
//         <View style={styles.Header_Cont}>
//           <Text style={styles.Forget_Txt}>OTP Verification</Text>
//           <Text style={styles.Detail_Txt}>
//             Enter OTP sent to your email for the verification process.
//           </Text>
//         </View>
//         <View style={styles.Body}>
//           <View style={styles.inputContainer}>
//             {otp.map((pin, index) => (
//               <TextInput
//                 key={index}
//                 ref={ref => (inputRef.current[index] = ref)}
//                 style={[styles.Otp, {borderColor: pin ? '#959595' : '#959595'}]}
//                 value={pin}
//                 onChangeText={value => handleOtpChange(value, index)}
//                 onKeyPress={event => handleOtpKeyPress(event, index)}
//                 maxLength={1}
//                 keyboardType="numeric"
//                 autoFocus={index === 0}
//               />
//             ))}

//           </View>
//         </View>
//       </ScrollView>
//       <CustomButton  width={'80%'}  bgClr={'orange'} color={'white'} title={'Continue'}/>
//     </View>
//   );
// };






//       <Text style={{
//         textAlign: 'center',
//         marginTop: 20,
//         marginBottom: 20,
//         color: '#ED8812',

//       }}>56 sec</Text>


//       <CustomButton
//         onPress={() => navigation.navigate('Verification')}
//         title={'Continue'}
//       />

//       <TouchableOpacity
//         style={{
//           alignSelf: "center",
//           width: '85%',
//           paddingLeft: 20,
//           height: 50,
//           borderRadius: 10,
//           borderWidth: 1,
//           marginTop: 10,
//           flexDirection: 'row',
//           alignItems: 'center',
//           paddingRight: 20,
//           justifyContent: 'center',
//           backgroundColor: 'red',
//         }}
//         onPress={() => navigation.navigate('Verification')}
//       >
//         <Text>flahl jugar</Text>
//       </TouchableOpacity>
//     </View>
//   )
// }

// export default Verification


// const styles = StyleSheet.create({
//   Main_Cont: {
//     backgroundColor: '#FFFFFF',
//     padding: '3%',
//     flex: 1,
//   },
//   Header_Cont: {},
//   Logo: {
//     width: 200,
//     height: 200,
//     resizeMode: 'contain',
//     alignSelf: 'center',
//     marginVertical: '7%',
//   },
//   Body: {},
//   Forget_Txt: {
//     fontSize: 24,
//     color: '#000000',
//     lineHeight: 30,
//     fontWeight: '600',
//     marginTop: '10%',
//   },
//   Detail_Txt: {
//     fontSize: 12,

//     color: '#9A9A9A',
//     lineHeight: 15,
//     marginTop: '2%',
//     width: '90%',
//   },
//   Input_Cont: {
//     marginVertical: '7%',
//   },
//   Input_With_Icon: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     width: '100%',
//     backgroundColor: '#BABABA',
//     padding: '1%',
//     paddingHorizontal: '3%',
//     borderRadius: 10,
//   },
//   Sms_Icon: {
//     width: 20,
//     height: 20,
//     resizeMode: 'contain',
//     marginRight: '2%',
//   },

//   inputContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     width: '90%',
//     alignSelf: 'center',
//   },
//   Otp: {
//     width: 70,
//     height: 55,
//     backgroundColor: '#BABABA',
//     marginBottom: '3%',
//     justifyContent: 'center',
//     textAlign: 'center',
//     borderRadius: 10,
//     elevation: 1,
//     borderWidth: 0.5,
//     fontSize: 16,
//     color: '#000000',
//   },
//   input: {
//     width: 40,
//     height: 40,
//     borderWidth: 1,
//     borderRadius: 4,
//     marginHorizontal: 5,
//     textAlign: 'center',
//     fontSize: 16,
//   },

//   Btn_Cont: {
//     marginVertical: '3%',
//   },
// });
