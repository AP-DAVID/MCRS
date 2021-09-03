import React from 'react';
import {SafeAreaView, StyleSheet, Text, View, Image , TouchableOpacity} from 'react-native';
import { Card, Paragraph, Title } from 'react-native-paper';

export default function CustomCard({ImageDir, style1, songTitle, songName, style2, style3, style4, clickEvent}){
  return(
  <SafeAreaView style={styles.container}>
    <View style={styles.container}>

      <TouchableOpacity onPress={clickEvent}>
        <Card>
    <Card.Cover style={style1} source={ImageDir} />
    <Card.Content style={style2}>
      <Paragraph style={style3}>{songTitle}</Paragraph>
      <Paragraph style={style4}>{songName}</Paragraph>
    </Card.Content>
     </Card>
     </TouchableOpacity>

    </View>
  </SafeAreaView>
  )
    
}
const styles = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'transparent',
        alignContent : 'center'
    },
    

})