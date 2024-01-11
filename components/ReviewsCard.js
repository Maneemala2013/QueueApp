import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Image, Divider } from "@rneui/themed";
import { Star } from "phosphor-react-native";
import {
    useFonts,
    Rubik_400Regular,
    Rubik_600SemiBold,
  } from '@expo-google-fonts/rubik';

const ReviewsCard = ({givenStar, date, writer, comments}) => {

    let [fontsLoaded] = useFonts({
        Rubik_400Regular,
        Rubik_600SemiBold,
      });
    
    if (!fontsLoaded) {
    return (<View style={styles.container}></View>);
    } else {
    return(
        <View style={styles.container}>
            <View style={styles.card}>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={{uri: "https://img.freepik.com/free-vector/cute-cheerful-student-girl-jumping-cartoon-character-kid-children-school-education-hand-draw-art-illustration_56104-2201.jpg?w=740&t=st=1704860341~exp=1704860941~hmac=05ec22c0fff86e951421733b4602702ce9f63c21a0a52fcd7c16eadf0f4603ca"}}/>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.top}>{givenStar} <Star color="#938FC7" weight="fill" size={18}/>・{date}</Text>
                    <Text style={styles.writer}>{writer}</Text>
                    <Text style={styles.comments}>{comments}</Text>
                </View>
            </View>
            <Divider width={1.5}/>
        </View>
    )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    card: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        minHeight: 100,
        maxHeight: 200,
        width: "100%",
        padding: 15,
    },
    imageContainer: {
        borderRadius: 50,
        overflow: "hidden",
        marginRight: 5
    },
    textContainer: {
        width: "80%",
        alignItems: "flex-start",
    },
    image: {
        width: 50,
        height: 50,
        resizeMode: "contain"
    },
    top: {
        fontSize: 16,
        fontFamily: "Rubik_400Regular",
    },
    writer: {
        fontSize: 12,
        fontFamily: "Rubik_400Regular",
        color: "#6D6767"
    },
    comments: {
        fontSize: 14,
        fontFamily: "Rubik_400Regular",
    }
})

export default ReviewsCard;