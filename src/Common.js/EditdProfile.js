import { View, Text, TouchableOpacity, Image } from 'react-native'
import React,{useState} from 'react'
import CustomTextinput from '../Components/CustomTextinput'
import Custom_Textinput2 from '../Components/Custom_Textinput2'
import Header2 from './Header2'
import CustomButton from '../Components/CustomButton'
import {launchCamera, launchImageLibrary} from 'react-native-image-picker'

const EditdProfile = ({ navigation }) => {

    const [isNewImg, setNewImg] = useState(false);
        const [imageUri, setImageUri] = useState(require('../Images/dp.png'));

    const openGallery = async () => {  
              const result = await launchImageLibrary({mediaType: 'photo'});
            result?.assets[0] 
                ? (setImageUri(result?.assets[0]?.uri), setNewImg(true))
                : null;
            };
            const openCamera = async () => {
                      const result = await launchCamera({mediaType: 'photo'});
                      result?.assets[0] 
                        ? (setImageUri(result?.assets[0]?.uri), setNewImg(true))
                        : null; 
                    }; 

    return (
        <View >

            <Header2 title={'Edit Profile'} />
            <View>

            <Image
            source={isNewImg ? {uri: imageUri} : imageUri}
            style={{ width: 133, height: 133, alignSelf: 'center' }}
          />
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => {
            //   openCamera();
              openGallery();
            }}
            style={{
                width: 41, height: 41, backgroundColor: 'white',
                top: 40, left: '60%', borderWidth: 1, borderRadius: 100,
                position: 'absolute'
            }}>
            <Text style={{
                        fontSize: 30, fontWeight: '600', color: '#ED8812',
                        textAlign: 'center'
                    }}> + </Text>
          </TouchableOpacity>







                {/* <Image source={require('../Images/dp.png')}
                    style={{ width: 133, height: 133, alignSelf: 'center' }} />
                <TouchableOpacity style={{
                    width: 41, height: 41, backgroundColor: 'white',
                    top: 40, left: '60%', borderWidth: 1, borderRadius: 100,
                    position: 'absolute'
                }}

                >

                    <Text style={{
                        fontSize: 30, fontWeight: '600', color: '#ED8812',
                        textAlign: 'center'
                    }}>+</Text> */}
                {/* </TouchableOpacity> */}
            </View>

            <View style={{ marginTop: 60 }}>
                <CustomTextinput
                    placeholder={'User name'} />
               <CustomTextinput
                    placeholder={'Email'} />
                 <CustomTextinput
                    placeholder={'Address'} />
                 <CustomTextinput
                    placeholder={'Phone no'} />
            </View>

            
<TouchableOpacity style={{
    width:90,alignItems:'center',backgroundColor:'red',
    padding:17,borderRadius:15,
    marginTop:170,marginHorizontal:'75%',backgroundColor:'#ED8812',
}} onPress={()=>navigation.navigate('Profile')}>
    <Text style={{fontSize:20,fontWeight:'700',color:'white'
}}>Save</Text>
</TouchableOpacity>


        </View>
    )
}

export default EditdProfile




// import {
//     StyleSheet,
//     Text,
//     View,
//     TouchableOpacity,
//     Image,
//     TextInput,
//     ScrollView,
//   } from 'react-native';
//   import React, {useState} from 'react';
  
//   import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
//   const Edit_Profile = ({navigation}) => {
  
//     const [isNewImg, setNewImg] = useState(false);
//     const [imageUri, setImageUri] = useState(require('../Images/cart.png'));
  


//     const EditdProfile = ({ navigation }) => {
//     const openCamera = async () => {
//       const result = await launchCamera({mediaType: 'photo'});
//       result?.assets[0]
//         ? (setImageUri(result?.assets[0]?.uri), setNewImg(true))
//         : null;
//     };
  
//     const openGallery = async () => {
//       const result = await launchImageLibrary({mediaType: 'photo'});
//     result?.assets[0]
//         ? (setImageUri(result?.assets[0]?.uri), setNewImg(true))
//         : null;
//     };
// }
//     return (
//       <ScrollView>
//         <View style={styles.container2}>
//           <TouchableOpacity
//             style={styles.container3}
//             activeOpacity={0.6}
//             onPress={() => {
//               navigation.navigate(NavigationNames.Profile);
//             }}>
//             <Image source={require('../Images/contact.png')} style={styles.Img1} />
//           </TouchableOpacity>
//           <Text style={styles.text2}>Edit Profile</Text>
//         </View>
  
//         <View
//           style={styles.container1}>
//           <Image
//             source={isNewImg ? {uri: imageUri} : imageUri}
//             style={styles.img}
//           />
//           <TouchableOpacity
//             activeOpacity={0.6}
//             onPress={() => {
//               // openCamera();
//               openGallery();
//             }}
//             style={styles.btn}>
//             <Text style={styles.text1}> + </Text>
//           </TouchableOpacity>
//         </View>
  
//         <View>
//           <TextInput
//             placeholder="UserName"
//             placeholderTextColor={'#0000004D'}
//             style={styles.input}
//           />
//           <TextInput
//             placeholder="Email"
//             placeholderTextColor={'#0000004D'}
//             style={styles.input}
//           />
//           <TextInput
//             placeholder="Address"
//             placeholderTextColor={'#0000004D'}
//             style={styles.input}
//           />
//           <TextInput
//             placeholder="Phone No"
//             placeholderTextColor={'#0000004D'}
//             style={styles.input}
//           />
//         </View>
//         <TouchableOpacity style={styles.container} activeOpacity={0.6}>
//           <Text style={styles.text}>Save</Text>
//         </TouchableOpacity>
//       </ScrollView>
//     );
//   };
  
//   export default Edit_Profile;
  
//   const styles = StyleSheet.create({
//     container3: {
//       backgroundColor: 'white',
//       width: 38,
//       height: 38,
//       justifyContent: 'center',
//       alignItems: 'center',
//       marginLeft: 20,
//       borderRadius: 38,
//       marginTop: 32,
//     },
//     container2: {
//       flexDirection: 'row',
//     },
//     text2: {
//       fontSize: 30,
//       color: 'black',
//       alignSelf: 'center',
//       fontWeight: 'bold',
//       marginTop: 30,
//       marginBottom: 60,
//       marginLeft: 80,
//     },
//     Img1: {
//       width: 21.38,
//       height: 23.16,
//     },
//     input: {
//       width: 360,
//       height: 63,
//       borderWidth: 1,
//       borderColor: 'black',
//       borderRadius: 10,
//       marginHorizontal: 10,
//       paddingLeft: 40,
//       marginVertical: 10,
//       color: 'black',
//     },
//     container: {
//       width: 108,
//       height: 59,
//       backgroundColor: '#ED8812',
//       justifyContent: 'center',
//       alignItems: 'center',
//       borderRadius: 10,
//       marginLeft: 260,
//       marginTop: 90,
//     },
//     text: {
//       fontSize: 20,
//       fontWeight: 'bold',
//     },
//     btn:{
      
//         width: 43,
//         height: 43,
//         borderWidth: 1,
//         borderColor: '#ED8812',
//         borderRadius: 40,
//         justifyContent: 'center',
//         alignItems: 'center',
//         marginLeft: 130,
//         marginTop: -90,
//         backgroundColor: 'white',
      
//     },
//     container1:{
//       justifyContent: 'center',
//       alignItems: 'center',
//       marginBottom: 70,
//     },
//     img:{
//       width: 133,
//       height: 133,
//       borderRadius: 133 / 2,
//     },
//     text1:{
//       color: '#ED8812', 
//       fontSize: 20
//     }
//   });