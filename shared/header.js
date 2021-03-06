import * as React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

export default function Header({navigation, title}){
    
   

    return (
        <ImageBackground source={require('../assets/game_bg.png')} style = {styles.header}>
           
            <View style = {styles.headerTitle}>
           <Text style = {styles.headerText}>{title}</Text>
           </View>
        </ImageBackground>
    )
}
const styles = StyleSheet.create({
     header : {
         width : '100%',


         height : '100%',
         flexDirection : 'row',
         alignItems : 'center',
         justifyContent : 'center',
     },
     headerText : {
         fontWeight : 'bold',
         fontSize : 20,
         color : '#333',
         letterSpacing : 1,
     },
     icon : {
         position : 'absolute',
         left : 16,

     },
    
     headerTitle : {
         flexDirection : 'row',
     }
});