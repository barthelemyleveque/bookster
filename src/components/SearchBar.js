import React from 'react';
import BackButton from '../components/BackButton'
import { StyleSheet, Text, View } from 'react-native'

const NavBar = ({ goBack }) => {
    return (
        <View style={styles.container}>
        <BackButton goBack={goBack} />

        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        alignSelf: 'stretch',
        height: 52,
        flexDirection: 'row', // row
        backgroundColor: 'yellow',
        alignItems: 'center',
        justifyContent: 'space-between', // center, space-around
        paddingLeft: 10,
        paddingRight: 10
      }
})

export default NavBar;