import React from 'react'
import { Image, View, StyleSheet, Text, } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const colors = ["#001f3f", "#001f3f", "#7FDBFF", "#39CCCC", "#3D9970", "#2ECC40", "#01FF70", "#FFDC00", "#FF851B", "#FF4136", "#85144b", "#F012BE", "#B10DC9", "#111111", "#AAAAAA", "#DDDDDD",]
const font_colors = ["#80BEFF", "#B3DBFF", "#004A66", "#000000", "#173728", "#0F3E13", "#00662D", "#675800", "#663100", "#AB1C11", "#E373A9", "#65064F", "#EFAAF9", "#909090", "#000000", "#000000" ]

const BookCard = () => (
    <View style={styles.container}>
        {/* <ReactSVG src="../assets/no_cover.svg" /> */}
        <Image source={require('../assets/no_cover.png')} style={styles.cover}/>
        <View style={styles.details}>
            <Text style={styles.title}>L'Idiot</Text>
            <Text style={styles.author}>Fyodor Dostoevsky</Text>
            <View style={styles.tags}>
                <Text style={styles.tag1}>roman</Text>
                <Text style={styles.tag2}>classique</Text>
                <Text style={styles.tag3}>russie</Text>
            </View>

        </View>

    </View>
);

const styles = StyleSheet.create({
    container:{
        color:"white",
        display: "flex",
        flexDirection:'row',
        alignItems:"center",
        height:112,
        padding:20,
        backgroundColor:"white",
        marginBottom:5,

    },
    cover:{
        width:56,
        height:80,
        margin:'auto',
    },
    details:{
        flexDirection:'column',
        marginLeft:20,
        overflow:'scroll',
    },

    title:{
        fontFamily: 'Mulish',
        fontSize: 16,
        /* identical to box height */


        /* Dark BG */

        color: "#111325",
    },
    author:{
        opacity: 0.5,
        color: "#111325",
        fontSize:14,

    },
    tags:{
        backgroundColor:'white',
        flexDirection:'row',
        alignItems:'baseline',
        marginTop:5,
    },
    tag1:{
        backgroundColor:'#001f3f',
        borderRadius:4,
        fontSize:12,
        overflow:'hidden',
        textAlign:'center',
        padding:5,
        marginRight:8,
        color:'#80BEFF',
    },
    tag2:{
        backgroundColor:'#3D9970',
        borderRadius:4,
        fontSize:12,
        overflow:'hidden',
        textAlign:'center',
        padding:5,
        marginRight:8,
        color:'#173728',
    },
    tag3:{
        backgroundColor:'#B10DC9',
        borderRadius:4,
        fontSize:12,
        overflow:'hidden',
        textAlign:'center',
        padding:5,
        marginRight:8,
        color:'#EFAAF9',
    },

});

export default BookCard;