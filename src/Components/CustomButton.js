import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const CustomButton = ({ title,onPress,Button_View }) => {
  return (
    <TouchableOpacity
    onPress={onPress}
      style={[{
        alignSelf: "center",
        width: '85%',
        paddingLeft: 20,
        height: 50,
        borderRadius: 10,
        borderWidth: 1,
        marginTop: 15,
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: 20,
        justifyContent: 'center',
        backgroundColor: '#ED8812',
      },{Button_View}]}
    >
      <Text style={{ color: '#FFFFFF', textAlign: 'center' }}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;






// import React from 'react';
// import { View, Text, TouchableOpacity } from 'react-native';

// const CustomButton = ({ title }) => {
//   return (
//     <TouchableOpacity
//       style={{
//         alignSelf: "center",
//         width: '85%',
//         paddingLeft: 20,
//         height: 50,
//         borderRadius: 10,
//         borderWidth: 1,
//         marginTop: 10,
//         flexDirection: 'row',
//         alignItems: 'center',
//         justifyContent: 'center', // Center the content horizontally
//         paddingRight: 20,
//         backgroundColor: '#ED8812',
//       }}
//     >
//       <Text style={{ color: '#FFFFFF', textAlign: 'center' }}>{title}</Text>
//     </TouchableOpacity>
//   );
// };

// export default CustomButton;













// import { View, Text, TouchableOpacity } from 'react-native'
// import React from 'react'


// const CustomButton = ({ title }) => {
//     return (
//         <TouchableOpacity style={{
//             alignSelf: "center",
//             width: '85%',
//             paddingLeft: 20,
//             height: 50,
//             borderRadius: 10,
//             borderWidth: 1,
//             marginTop: 10,
//             flexDirection: 'row',
//             alignItems: 'center',
//             paddingRight: 20,
//             backgroundColor: '#ED8812',


//         }}>
//             <Text style={{color:'#FFFFFF',textAlign:'center' }}>{title}</Text>

//         </TouchableOpacity>
//     )
// }

// export default CustomButton