
import { createStackNavigator, HeaderBackground } from '@react-navigation/stack';
import Emotion from '../screens/emotion'
import * as React from 'react';
import Header from '../shared/header'
import Music from '../screens/music'

// const screens = {
//    Home:{
//        screen : Home
//    },
//    ReviewDetails :{
//        screen : ReviewDetails
//    }
// }


const Stack = createStackNavigator();

export default function RootStack() {
  return (
    <Stack.Navigator
      initialRouteName="Emotion"
     // screenOptions={{ gestureEnabled: false ,headerTintColor : '#000', headerStyle : { backgroundColor : '#999', height : 100}}}
    >
      <Stack.Screen
        name="Emotion"
        component={Emotion}
        options={
          ({navigation}) =>{
            return {
              headerTitle : () => <Header navigation={navigation} title='Mood-Cognizant'/>
            }
          }
        }
      />
      <Stack.Screen 
        name = "Music"
        component ={Music}
        initialParams = {{ user : 'me'}}
        options ={{ title : 'Music'}}
      />
     
    </Stack.Navigator>
  );
}




