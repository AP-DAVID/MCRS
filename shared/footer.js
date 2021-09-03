import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { AntDesign, Ionicons } from '@expo/vector-icons';
// import { Ionicons } from '@expo/vector-icons';


export default function Footer({pressHandler, name1}){

// pause-sharp
// ?ios-pause-circle
    return(
        <View style = {styles.viewCont}>
           
           <View style ={styles.viewCont1}>
               <View style = {styles.leftIcon}><Ionicons name="shuffle-outline" size={40} color="#ffff" />
               
            <Ionicons name="play-skip-back-sharp" size={40} color="#ffff" style={styles.icon1} /></View> 


           <TouchableOpacity onPress= {pressHandler}>
               <Ionicons name={name1} size={60} color="#ffff" />
               </TouchableOpacity>
       
           
              <View style={styles.rightIcon}><Ionicons name="play-skip-forward" size={40} color="#ffff" style={styles.icon2}/>
            <AntDesign name="customerservice" size={40} color="#ffff" /></View> 
            </View>
           
            
       </View>
    )
}
const styles = StyleSheet.create({
    leftIcon : {
     flex : 1,
     flexDirection : 'row',
     paddingLeft : 35,

    },
    rightIcon : {
        flex : 1,
        flexDirection : 'row',
        justifyContent : 'flex-end',
        paddingRight : 35,
        
   
    },
   viewCont : {
       flex : 1,
       marginVertical : 50,
      flexDirection : 'row',
      alignItems : 'flex-end',
      justifyContent : 'space-between',
    

   },
   viewCont1 : {
    flex : 1,
    borderTopEndRadius : 50,
    borderTopLeftRadius : 50,
    borderBottomLeftRadius : 50,
    borderBottomRightRadius : 50,
    borderRadius : 50,
   flexDirection : 'row',
   alignItems : 'flex-end',
   justifyContent : 'space-between',
   backgroundColor : 'black',
   backgroundColor : 'transparent',
 

},
   icon2 : {
       paddingRight : 15,
   },
   icon1 : {
    paddingLeft : 15,
}

});