import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { withNavigation } from 'react-navigation';
import  AddBookButton  from '../components/AddBookHandler'

const BottomBar = ({navigation}) => (
    <View style={styles.bottomNav}>
        <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>     
          <Feather name="book" size={35} color="white" /> 
        </TouchableOpacity>
        <AddBookButton navigation={navigation}/>
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
      paddingBottom:20,
  
    },
  });

export default withNavigation(BottomBar);