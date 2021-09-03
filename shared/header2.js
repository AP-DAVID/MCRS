import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import SongView from './SongView.js';

export default function Header2 ({pressHandler, musicplay}){
    return (
       <View style = {styles.Container}>
          
               <Text style ={styles.Text1}> Good Day,</Text>
               
           
               <Text style = {styles.Text2}>Project Group</Text>

               <Image style={styles.image1} source={require('../assets/headphone.jpg')}  />
                
            <Text style={styles.text2}>Your Emotion : {musicplay}</Text>
               <Text style={styles.Text3}>Songs</Text>
               

              <View style={styles.SongView1} pressHandler={pressHandler} ><SongView /></View> 

              
           
          
       </View>
    )
}
const styles = StyleSheet.create({
    Container : {
     flex: 1,
     paddingVertical : 40,
     flexDirection : 'column',
     
     
    },
    text2 : {
        color : '#ffff',
        fontFamily : 'nunito-bold',
        fontSize : 19,
    },
    SongView1 : {
        padding : 0,
        flexDirection : 'row',
    },
    image1 : {
        marginVertical : 25,
        height: 300,
        width : 400,
        borderRadius : 90,
    },
    
    Text1 : {
        fontSize : 24,
        color :"#EEF1EA",
        fontFamily : 'nunito-regular',
       
        
    },
    Text2 : {
        fontSize : 24,
        color :"#ffff",
        fontFamily : 'nunito-bold',
        
    },
    Text3 : {
        fontSize : 24,
        color :"#9999",
        fontFamily : 'nunito-bold',
        
    },
});