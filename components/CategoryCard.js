import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Image } from "@rneui/themed";
import {
    useFonts,
    Rubik_600SemiBold,
  } from '@expo-google-fonts/rubik';

const CategoryCard = ({ categoryName, imageUri }) => {
    let [fontsLoaded] = useFonts({
        Rubik_600SemiBold,
      });
    
    if (!fontsLoaded) {
    return (<TouchableOpacity style={styles.container}></TouchableOpacity>);
    } else {
        return (
            <TouchableOpacity style={[styles.card, styles.shadowProp]} onPress={()=>{console.log(`${categoryName} is chosen`)}}>
                <ImageBackground style={styles.image} source={{uri: `${imageUri}`}} imageStyle={{borderRadius: 15}}>
                    <View style={styles.child}></View>
                </ImageBackground>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {categoryName}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    }
};

const styles = StyleSheet.create({
    shadowProp: {
        shadowOffset: { width: 3, height: 3 },
        shadowColor: 'black',
        shadowOpacity: 0.3,
        elevation: 5,
    },
    card : {
        width : '45%',
        height: 120,
        marginBottom : 10,
        borderRadius : 15,
        position: "relative",
    },
    image : {
        width : '100%',
        height : '100%',
    },
    textContainer : {
        alignItems : 'center',
        justifyContent: "center",
        position: "absolute",
        bottom: 8,
        left: 8,
    },
    text : {
        fontFamily: "Rubik_600SemiBold",
        fontSize : 20,
        textAlign: "left",
        color: "white"
    },
    child: {
        width: "100%",
        height: "100%",
        borderRadius: 15,
        backgroundColor: "rgba(0,0,0,0.5)"
    }
});

export default CategoryCard;
