import React, {Component} from 'react';
import {Text, Image, ImageBackground, View, StyleSheet} from 'react-native';

export default class Profile extends Component{
    render(){
        return(
            <View style = {styles.container}>
                <Text style = {styles.text}> PROFILE </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#15193c",
      },
      text:{
        color:"white", justifyContent:'center', alignSelf:'center',
        fontSize :25, marginTop : 50
        }
})