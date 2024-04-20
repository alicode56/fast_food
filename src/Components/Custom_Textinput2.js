// import { View, Text, Image, TextInput } from 'react-native'
// import React, { useState } from 'react';

// const Custom_Textinput2 = ({ value, onChangeText, placeholder, icon, keyboardType,img ,title}) => {
//   const [text, setText] = useState("");

//   return (
//     <View
//       style={{
//         alignSelf: "center",
//         width: '85%',
//         paddingLeft: 16,
//         height: 50,
//         borderRadius: 10,
//         borderWidth: 1,
//         marginTop: 17,
//         flexDirection: 'row',
//         alignItems: 'center',
//         paddingRight: 20,
//         justifyContent:'space-between'
//       }}
//     >
//       <Image source={icon} style={{ width: 20, height: 20 }} />

//       <Text style={{fontSize:18,marginLeft:12}}>{title}</Text>

//       {/* <TextInput
//         value={value}
//         keyboardType={keyboardType ? keyboardType : 'default'}
//         onChangeText={(text) => {
//           setText(text);

//         }}

//         placeholder={placeholder}
//         style={{ marginLeft: 10 }}
//       /> */}
//       <Image source={img} style={{ width: 20, height: 20, }} />
//     </View>
//   );
// }

// export default Custom_Textinput2





import { View, Text, Image, TextInput } from 'react-native'
import React, { useState } from 'react';

const Custom_Textinput2 = ({ value, onChangeText, placeholder, icon, keyboardType, img, title }) => {
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
        marginTop: 17,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingRight: 20,
      }}
    >
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image source={icon} style={{ width: 20, height: 20 }} />
        <Text style={{ fontSize: 18, marginLeft: 12 }}>{title}</Text>
      </View>

      <Image source={img} style={{ width: 20, height: 20 }} />
    </View>
  );
}

export default Custom_Textinput2;





