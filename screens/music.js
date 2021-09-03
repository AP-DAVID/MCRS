import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import {ImageBackground, StyleSheet, Text, View } from 'react-native';
import Footer from '../shared/footer'
import Header2 from '../shared/header2'
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { Audio } from 'expo-av';
import { songs } from '../styles/global' 



    

export default function Music({ route }) {

  const [playmo, setplaymo] = useState("ios-play-circle");
 const [fontsLoaded, setFontsLoaded] = useState(false);
 const [sound, setSound] = useState();
 const {musicplay} =  route.params;
const boy = musicplay


const pressHandler = async () =>{
  
  console.log('Loading Sound');
  const { sound } = await Audio.Sound.createAsync(
     
    musicplay === "happy" ? songs.happy[Math.floor(Math.random() * 3) + 1] : 
    musicplay === "sad" ? songs.sad[Math.floor(Math.random() * 3) + 1] :
    musicplay === "anger" ? songs.anger[Math.floor(Math.random() * 3) + 1] :
    songs.neutral[Math.floor(Math.random() * 3) + 1]
  );
  setSound(sound);

  console.log('Playing Sound');
  setplaymo("ios-pause-circle");
  await sound.playAsync();

 
 }
  useEffect(() => {
    return sound
      ? () => {
          console.log('Pausing');
          sound.unloadAsync(); }
      : undefined;
  }, [sound]);
 
  

    return (
      <ImageBackground source={require('../assets/background.jpg')} style={styles.container}>

      <Header2 pressHandler = {pressHandler} musicplay = {musicplay}/>

      <StatusBar style="auto" />

   
  
    
   
    

    <View style={styles.footer}>
    
      <Footer pressHandler={pressHandler}  name1={playmo}/> 

    </View>
  
    </ImageBackground>
     
    );
    

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer : {
    flex: 1,
    flexDirection : 'row',
    alignItems : 'stretch',

  }
});
