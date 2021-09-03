
import React, {useState} from 'react';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import Navigator from './drawer/homeStack';
import { NavigationContainer } from '@react-navigation/native';

const getFonts = ()=>{
  return Font.loadAsync({
    'nunito-regular' : require('./assets/fonts/Nunito-Regular.ttf'),
    'nunito-bold' : require('./assets/fonts/Nunito-Bold.ttf'),
    // 'Ionicons': require('@expo/vector-icons/fonts/Ionicons.ttf'),
    // 'AntDesign': require('@expo/vector-icons/fonts/AntDesign.ttf')
  });
}



export default function App() {
const [fontsLoaded, setFontsLoaded] = useState(false);

if(fontsLoaded){
  return (
    <NavigationContainer>
       < Navigator />
  </NavigationContainer>
   
  );
} else {
  return (
    <AppLoading 
     
    startAsync= {getFonts}
    onFinish = {() => setFontsLoaded(true)}
    onError={console.warn}
    />
  
    
  )
  
}
  
}


