import React from 'react'
import { View, StyleSheet, } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Button from '../components/Button'
import { logoutUser } from '../api/auth-api'
import TopBar from '../components/TopBar';
import BottomBar from '../components/BottomBar';
import BookCard from '../components/BookCard';



const Dashboard = ({ navigation }) => (
  
  <View style={styles.containerMain}>
    <TopBar />
    


    <ScrollView style={styles.bookList}> 
      <BookCard />
      <BookCard />
      <BookCard />
    </ScrollView>




    <Button mode="outlined" onPress={logoutUser}>
      Logout
    </Button>

    <BottomBar />






  </View>
)

const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
  },

  bookList:{
  }

});

export default Dashboard;

