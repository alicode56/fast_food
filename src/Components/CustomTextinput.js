import React, { useState } from 'react';
import { View, Text, Image, TextInput } from 'react-native';

const CustomTextinput = ({ value, onChangeText, placeholder, icon, keyboardType }) => {
  const [text, setText] = useState("");

  return (
    <View
      style={{
        alignSelf: "center",
        width: '85%',
        paddingLeft: 16,
        height: 50,
        borderRadius: 10,
        borderWidth: 1,
        marginTop:8,
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: 20,
      }}
    >
      <Image source={icon} style={{ width: 20, height: 20 }} />
      <TextInput
        value={value}
        keyboardType={keyboardType ? keyboardType : 'default'}
        onChangeText={(text) => {
          setText(text);
        
        }}
     
        placeholder={placeholder}
        style={{marginLeft:10}}
      />
       {/* <Image source={icon} style={{ width: 20, height: 20,marginLeft:'60%' }}/> */}
    </View>
  );
}

export default CustomTextinput;




// import { View, Text, Image } from 'react-native'
// import React from 'react';
// import { TextInput } from 'react-native-gesture-handler'
// import { useState } from 'react';

// const CustomTextinput = ({value,onChangeText,placeholder,icon,keyboardType}) => {
//   const [text, setText] = useState(value);
//   return (
//     <View style={{
//       alignSelf: "center",
//             width: '85%',
//            paddingLeft:20,
//           height:50,
//           borderRadius:10,
//           borderWidth:1,
//           marginTop:30,
//           flexDirection:'row',
//           alignItems:'center',
//           paddingRight:20,
           
//     }}>
//       <Image source={icon} style={{width:24,height:24}}/>
//       <TextInput 
//       value={value}
//       keyboardType={keyboardType? keyboardType:'default'}
//       onChangeText={onChangeText=>{
//         onChangeText(text)
//       }}/>
//     </View>
//   )
// }

// export default CustomTextinput