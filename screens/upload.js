import React, { useEffect, useState } from 'react';
import { StyleSheet, ActivityIndicator, FlatList, Text, View, Image, Platform } from 'react-native';
import FlatButton from '../shared/button'
import * as ImagePicker from 'expo-image-picker'
import Constants from 'expo-constants';
import { Button } from 'react-native-paper';
import axios from 'axios';
import Buttonss from '../shared/buttons'

const Emotion = ({ navigation }) => {
  const [musictextt, setMusictext] = useState("")
  const musictext = musictextt
  const [image, setImage] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [namewe, setNamewe] = useState("Upload file to imgbb");
  const [data, setData] = useState([]);
  const [urll, setUrl] = useState("");
  const [showit, setShowit] = useState(true);
  const BaseUrll = "https://api.imgbb.com/1/upload?key=78f72e08bd0710628542991b48f4c5a8&expiration=600";
  const url = urll;
  const BaseUrl = "http://api.skybiometry.com/fc/faces/detect.json";
  const api_key = "gok8cr6m8ig65ucmamt8pj4ki9";
  const api_secret = "nvmga84qj1rkr2gjrkde3fsjkk&urls";
  const attributes = "all"
  const [loading, setIsLoading]= useState(false)

  useEffect(() => {
    
      (async () => {
        if (Platform.OS !== 'web') {
          const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
          if (status !== 'granted') {
            alert('Sorry, we need camera roll permissions to make this work!');
          }
        }
      })();

  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  }

  const uploadImage = async () =>{
    let filename = image.split('/').pop();
    let match = /\.(\w+)$/.exec(filename);
    let type = match ? `image/${match[1]}` : `image`;

    console.log(image)
    var bodyFormData = new FormData();

    bodyFormData.append('image', {uri : image, name : filename, type })

    

   await axios({
      method: "post",
      url: `${BaseUrll}`,
      data: bodyFormData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(async function(response) {
        //handle success
        console.log(response.data.data.url);
        await setUrl(response.data.data.url);

        console.log(urll)

      })
      .catch(async function (response) {
        //handle error
        console.log(response);
      })
    
      

      
            console.log(urll)
            await fetch(`${BaseUrl}?api_key=${api_key}&api_secret=${api_secret}&urls= ${url}&attributes=${attributes}`)
                    .then(async(response) => await response.json())
                    .then(async(json) => await setData(json.photos))
                    .catch((error) => console.error(error))
                    .finally(() => {setLoading(false)})
                    
           

            
            
            
            
            

    }
    const presshandler = (musictext) =>{
      console.log(musictext)
      return navigation.navigate('Music', musictext)
    }


    const enterr = () =>{
      console.log(data)
       console.log(typeof(data[0].tags[0]))
    }

  return (
    <View style={{ flex: 1, padding: 24, backgroundColor : '#f8f8ff'}}>

      <Button icon="camera" mode="contained" color="#f01d71" onPress={pickImage} style={{ height : 45}}>
         Pick an image from camera roll
      </Button>
      
      {/* <Button icon="camera" mode="contained" color="#f01d71" onPress={enterr} style={{ height : 45}}>
        enter  </Button> */}
      <Image style={styles.inage} source={{uri : image}}/>
      { !showit ? <ActivityIndicator /> : (
        <View>

          <Button mode="contained" color="#f01d71" onPress={uploadImage} loading = {loading} style={{ height : 45}} >
          {namewe}
          </Button>


          </View>
      ) 
      }
      {console.log(typeof(data.tags))}
            
      { isLoading ? <ActivityIndicator/> : 
           isLoading === false? (
        <FlatList 
          data={data}
          keyExtractor={({ id }, key) => id}
          renderItem={({ item }) => (
            
            <View style ={styles.ViewComp}>
             {setMusictext(item.tags[0].attributes.mood.value)}
            <Text style = {styles.textfied}>Your Emotion is : {item.tags[0].attributes.mood.value}</Text>
            <Text style = {styles.textfied}>Gender : {item.tags[0].attributes.gender.value}</Text>
            <Text style = {styles.textfied}>Smiling : {item.tags[0].attributes.smiling.value}</Text>
            <Text style = {styles.textfied}>Predicted Age : {item.tags[0].attributes.age_est.value}</Text>
            <Text style = {styles.textfied}>Your Race(black) : {item.tags[0].attributes.ethnicity.black.value}</Text>
            {/* <Text style = {styles.textfied}>Beard? : {item.tags[0].attributes.beard.value}</Text> */}
            <Text style = {styles.textfied}>mustache : {item.tags[0].attributes.mustache.value}</Text>
            {item.tags[0].attributes.mood.value == 'happy' ? 
             <Image  style={styles.image1} source={require('../assets/happy.png')}/> : (
                <Text> Other emotion is here </Text>
        
             )  
            }
            
             </View>
             
          )}
        
        />
         ):  <ActivityIndicator/>
      }
      
     
     { isLoading ? <ActivityIndicator/> : (
     <Buttonss
      isLoading={isLoading}
        presshandler={presshandler} 
        uploadImage={uploadImage}
      />
     )}
    </View>
  );
};
export default Emotion;
const styles = StyleSheet.create({
   ViewComp : {
      flex : 1,
      alignItems : 'center',
      marginVertical : 100,
      
  },

   image1 : {
     height : 150,
     width : 150,
     flexDirection : 'column',
     alignSelf : 'center',
     marginTop : 90,

     

   },
   inage : {
     alignSelf : "center",
     width : 150,
     marginVertical : 20,
     height : 150,
    borderRadius: 150 / 2,
    overflow: "hidden",
    borderWidth: 3,
    borderColor: "red"
   }
}) 

