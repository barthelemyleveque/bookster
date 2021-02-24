import React, { useState, useEffect, useRef} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import {Icon} from 'native-base';
import * as MediaLibrary from 'expo-media-library';
import RNTextDetector from "rn-text-detector";


const takePicture = async() => {
  


};
export default function CameraScreen() {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  let cameraRef = useRef(null)

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }


  return (
    <View style={styles.container}>
      <Camera style={styles.preview} type={type} ref={cameraRef}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}>
            <Text style={styles.text}> Flip </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={async() => {
              if (cameraRef){
                const options = { quality: 0.8, base64: true };
                let photo = await cameraRef.current.takePictureAsync().then(data =>{
                  console.log(data.uri)
                  RNTextDetector.detectFromUri(data.uri).then(data => {
                    console.log(data)
                    //MediaLibrary.saveToLibraryAsync(data.uri);
                    }
                  )
                  console.log('saved')
                })
              }
            else {
              console.log('cameraRef not here')
            }
            }} >
          <Icon type="Entypo" style={styles.icon} name="flickr-with-circle" />
          </TouchableOpacity>


        </View>
      </Camera>
    </View>
  );
  


  

  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  preview: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    margin: 20,
  },
  icon:{
    color:'white',
  },
  button: {
    flex: 0.1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: 'white',
  },
});
