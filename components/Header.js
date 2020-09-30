import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';



    const Header=(props)=>{
        return(
            <View style={styles.header}>
                <Text style={styles.title}>{props.title}</Text>
            </View>
        )
    }


const  styles=StyleSheet.create({
    header:{
        backgroundColor:"#171717",
        width:'100%',
        height:60,
        alignItems:'center',
        justifyContent:'center'
    },
    title:{
        color:'#FFF',
        fontSize:22
    }
})


export default Header