import React from 'react'
import { StyleSheet, ActivityIndicator, FlatList, Button, Text, View, Image, Platform } from 'react-native';
import FlatButton from './button'

 const Buttonss = ({ presshandler, uploadImage}) => {
    return (
        
        <View>
            <FlatButton style={styles.buttonShow} text="SHOW EMOTION"  onPress={uploadImage}/>
            <Text></Text>
            <FlatButton style={styles.buttonShow} onPress={presshandler}  text= "Click to hear music"/>  
        </View>
    )
}

export default Buttonss;

const styles = StyleSheet.create({
    buttonShow : {
        marginVertical : 40,
        marginBottom : 40,
        paddingVertical : 40
      },
})