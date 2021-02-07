import React from 'react'
import { Text, View, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons'; 

const TopBar = () => (
    <View style={styles.topBarStyle}>
        <Text style={styles.textMain}>books</Text>
        <Feather name="search" style={styles.iconSearch} size={35}/>
  </View>
)

const styles = StyleSheet.create({
    topBarStyle:{
        backgroundColor:'#111325',
        height:"8%",
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingHorizontal:10
    },

    textMain:{
        margin:5,
        fontSize: 30,
        color: "#F8F8F8",
      },

    iconSearch:{
        color:'white',
        alignSelf:'flex-end',
        margin: 10,
      }

})

export default TopBar;