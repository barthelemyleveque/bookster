import React from 'react'
import { StyleSheet, Text, } from 'react-native';

const colors = ["#001f3f", "#001f3f", "#7FDBFF", "#39CCCC", "#3D9970", "#2ECC40", "#01FF70", "#FFDC00", "#FF851B", "#FF4136", "#85144b", "#F012BE", "#B10DC9", "#111111", "#AAAAAA", "#DDDDDD",]
const font_colors = ["#80BEFF", "#B3DBFF", "#004A66", "#000000", "#173728", "#0F3E13", "#00662D", "#675800", "#663100", "#AB1C11", "#E373A9", "#65064F", "#EFAAF9", "#909090", "#000000", "#000000" ]

const Tag = () => (
    <Text style={styles.tag1}>roman</Text>
);

const styles = StyleSheet.create({
    tag1:{
        backgroundColor:'#001f3f',
        borderRadius:4,
        fontSize:12,
        overflow:'hidden',
        textAlign:'center',
        padding:5,
        marginRight:8,
        color:'#80BEFF',
}
});

export default Tag;