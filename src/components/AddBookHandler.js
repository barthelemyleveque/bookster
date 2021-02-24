import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
;
import { Feather } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { TouchableOpacity } from "react-native-gesture-handler";


{/* <TouchableOpacity>     
<AntDesign  name="pluscircleo" size={35} color="white" />
</TouchableOpacity> */}

const AddBookButton = ({navigation}) =>{
    const [modalVisible, setModalVisible] = useState(false);
    return (
      <View>
        <Modal style={styles.centeredView}
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <View>
                    <TouchableOpacity  onPress={() => {
                            setModalVisible(!modalVisible)
                            navigation.navigate('CameraScreen', {bookId: 0, navigation:{navigation}})
                          }}>
                        <Feather name="camera" size={80} color="black" />
                    </TouchableOpacity>
                </View>
                <View>
                    <MaterialCommunityIcons name="feather" size={80} color="black" />
                </View>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                  <AntDesign name="closecircleo" size={30} color="#111325" />
              </Pressable>
            </View>
          </View>
        </Modal>
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => setModalVisible(true)}
        >
            <AntDesign  name="pluscircleo" size={35} color="white" />
        </Pressable>
      </View>
    );
  };

const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "space-around",
      alignItems: "center",
      marginTop: 22,
      minWidth:'90%'
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
      flexDirection:'row',
    },

    buttonClose: {
      position:'absolute',
      right:-5,
      top:-5,
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    }
  });
  

export default AddBookButton;