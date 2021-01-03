import React from 'react'
import Background from '../components/Background'
import { View, TextInput, StyleSheet, Text } from 'react-native';
import AuthLoadingScreen from './AuthLoadingScreen';
import { Feather } from '@expo/vector-icons'; 

import { AntDesign } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { ScrollView } from 'react-native-gesture-handler';



const Dashboard = ({ navigation }) => (
  
  <View style={styles.containerMain}>
    
    <View style={styles.topBarStyle}>
      <Text style={styles.textMain}>books</Text>
      <Feather name="search" style={styles.iconSearch} size={35}/>
    </View>

    <ScrollView>
      <Text>BOOK</Text>
      <Text>BOOK</Text>
      <Text>BOOK</Text>
      <Text>BOOK</Text>
      <Text>BOOK</Text>
      <Text>BOOK</Text>
      <Text>BOOK</Text>
      <Text>BOOK</Text>
      <Text>BOOK</Text>
      <Text>BOOK</Text>
      <Text>BOOK</Text>
      <Text>BOOK</Text>
    </ScrollView>


    <View style={styles.bottomNav}>
      <Feather style={styles.bottomIcon} name="book" size={35} color="white" /> 
      <AntDesign style={styles.bottomIcon} name="pluscircleo" size={35} color="white" />
      <MaterialCommunityIcons style={styles.bottomIcon} name="account-circle-outline" size={35} color="white" />
    </View>
  </View>
)
const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
  },

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
  topBarStyle:{
    backgroundColor:'#111325',
    height:"8%",
    marginBottom:10,
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    paddingHorizontal:10
},
  iconSearch:{
    color:'white',
    alignSelf:'flex-end',
    margin: 10,
  },

  textMain:{
    margin:5,
    fontFamily: "mulish",
    fontSize: 30,
    color: "#F8F8F8",
  },

});
export default Dashboard
