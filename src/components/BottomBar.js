import React from 'react'
import { View, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

const BottomBar = () => (
    <View style={styles.bottomNav}>
        <Feather style={styles.bottomIcon} name="book" size={35} color="white" /> 
        <AntDesign style={styles.bottomIcon} name="pluscircleo" size={35} color="white" />
        <MaterialCommunityIcons style={styles.bottomIcon} name="account-circle-outline" size={35} color="white" />
    </View>
);

const styles = StyleSheet.create({
    bottomNav:{
      width: '100%',
      height: "12%",
      backgroundColor: '#111325',
      flexDirection:'row',
      justifyContent: 'space-around',
      alignItems:'center',
      position: 'absolute',
      bottom: 0,
  
    },
    bottomIcon:{
      marginBottom:'5%'
    },
  });

export default BottomBar;