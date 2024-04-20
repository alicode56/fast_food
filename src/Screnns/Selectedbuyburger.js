import { View, Text, Image,Button,TouchableOpacity,StyleSheet} from 'react-native'
import React,{useState} from 'react'
import Select_brgerHeader from '../Common.js/Select_brgerHeader'


const Selectedbuyburger = () => {

    const [quantity, setQuantity] = useState(1);

  const handleAdd = () => {
    setQuantity(quantity + 1);
  };

  const handleRemove = () => {
    if (quantity == 1) {
      null
    }
    else{
      setQuantity(quantity - 1);
    }
  }

  return (
    <View style={{ flex: 1 }}>
      <View>
      <Select_brgerHeader />
      </View>
      <View style={{flexDirection:'row', marginTop:30, marginHorizontal:20
      // backgroundColor:'gray'
      }}>

        <Text style={{fontSize:23,fontWeight:'500',alignSelf:'center', 
      }}>
          Quantity</Text>

      <View style={{
        width: 252, height: 65, justifyContent: 'center',
        // backgroundColor: 'red'
      }}>
        


             <View style={styles.container}>
            <View style={styles.buttonContainer}>
            <Text style={styles.quantityText1} onPress={handleRemove}>-</Text>
            {/* <Button title="-" onPress={handleRemove} /> */}
          
              <Text style={styles.quantityText}></Text>

              <Text style={styles.quantityText1}>{quantity}</Text>
              <Text style={styles.quantityText1} onPress={handleAdd}>+</Text>
              {/* <Button title="+" onPress={handleAdd} /> */}
             
            </View>
          </View>
     

      </View>
      </View>





      <View style={{
        width: 428, height: 62, backgroundColor: '#FFFFFF',
        flexDirection: 'row', 
      }}>
        <View style={{
          width: 160, height: 52, backgroundColor: '#FFE999', alignItems: 'center',
          alignSelf: 'center', left: 12, flexDirection: 'row', justifyContent: 'center',
          borderRadius: 10,
        }}>
          <Image source={require('../Images/dbiaddwale.png')}
            style={{ width: 30, height: 30, tintColor: 'black' }} />
          <Text style={{ fontSize: 20, fontWeight: '600', left: 5 }}>Cart</Text>
        </View>
        <View style={{
          width: 160, height: 52, backgroundColor: '#ED8812', borderRadius: 10,
          alignSelf: 'center', left: 30, alignItems: 'center', justifyContent: 'center',
        }}>
          <Text style={{ fontSize: 20, fontWeight: '600', color: 'white' }}>Buy Now</Text>
        </View>
      </View>
    </View>
  )
}

export default Selectedbuyburger



const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
 
  },
  quantityText: {
    fontSize: 20,
    marginBottom: 5,
    width:30,height:25,
   
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '50%', backgroundColor:'#FFE999'
  },
  quantityText1:{
    fontSize: 20,
    marginBottom: 5,
    width:40,height:40,textAlign:'center',
   right:10,textAlign:'center',
  //  backgroundColor:'#FFE999'

  }
});









// import React, { useState } from 'react';
// import { View, Text, Button, StyleSheet } from 'react-native';

// const Selectedbuyburger = () => {
//   const [quantity, setQuantity] = useState(0);

//   const handleAdd = () => {
//     setQuantity(quantity + 1);
//   };

//   const handleRemove = () => {
//     if (quantity > 0) {
//       setQuantity(quantity - 1);
//     }
//   };

//   return (
//     <View style={styles.container}>
     
//       <View style={styles.buttonContainer}>
//         <Button title="+" onPress={handleAdd} />
//         <Text style={styles.quantityText}>Quantity: {quantity}</Text>
//         <Button title="-" onPress={handleRemove} />
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   quantityText: {
//     fontSize: 20,
//     marginBottom: 20,
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     width: '50%',
//   },
// });

// export default Selectedbuyburger;
