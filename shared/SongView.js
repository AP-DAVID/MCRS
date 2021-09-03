import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Touchable } from 'react-native';
import CustomCard from './customCard'

export default function SongView({pressHandler}){
  return (
    <View style={styles.View1}>

        
        
        <CustomCard ImageDir={require('../assets/Jon.jpg')} 
        style1={styles.Image1} 
        songTitle="Hand Of God"
         songName="Jon Bellion"
         style2 ={styles.content}
         style3 = {styles.paraf}
         style4 = {styles.paraf1}
         clickEvent = {pressHandler}
         />
        
        
         
         <CustomCard 
            ImageDir={require('../assets/abt.jpeg')}
            style1={styles.Image1} 
        songTitle="A better Time"
         songName="Davido"
         style2 ={styles.content}
         style3 = {styles.paraf}
         style4 = {styles.paraf1}
         />

        
                   
            
    </View>

  )
}
const styles = StyleSheet.create({
   
    View1 : {
        flex : 1,
        width : '100%',
        backgroundColor : 'transparent',
        flexDirection : 'row',
        justifyContent : 'space-between',
        height : '50%',
    },
    Image1:{
      height:120,
      width : 160,
      marginHorizontal : 10,
      borderRadius : 30,
      borderTopEndRadius : 30,
      borderTopLeftRadius : 30

    },
    
    paraf : {
        color : '#ffff',
        fontFamily : 'nunito-bold',
        fontSize : 19,
        textAlign : "left"
       
        
      },
      paraf1 : {
        color : '#9999',
        fontFamily : 'nunito-bold',
        fontSize : 19,
       
        
      },
      content : {
        textAlign : 'center'
      },
    
});