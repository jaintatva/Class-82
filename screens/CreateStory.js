import React, {Component} from 'react';
import {Text, Image, ImageBackground, View, StyleSheet} from 'react-native';

export default class CreateStory extends Component{
    render(){
        return(
            <View style = {styles.container}>
                <Text style = {styles.text}> CREATE STORY </Text>
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