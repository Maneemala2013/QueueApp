import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Image, Divider } from "@rneui/themed";

const ReviewsCard = ({givenStar, date, writer, comments}) => {
    return(
        <View style={styles.container}>
            <View style={styles.card}>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={{uri: "https://img.freepik.com/free-vector/cute-cheerful-student-girl-jumping-cartoon-character-kid-children-school-education-hand-draw-art-illustration_56104-2201.jpg?w=740&t=st=1704860341~exp=1704860941~hmac=05ec22c0fff86e951421733b4602702ce9f63c21a0a52fcd7c16eadf0f4603ca"}}/>
                </View>
                <View style={styles.textContainer}>
                    <Text>{givenStar} <Ionicons name="star" size={20} color="purple"/> {date}</Text>
                    <Text>{writer}</Text>
                    <Text>{comments}</Text>
                </View>
            </View>
            <Divider width={1.5}/>
        </View>
    )
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
    }
})

export default ReviewsCard;