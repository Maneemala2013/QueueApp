import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Image } from "@rneui/themed";
const CategoryCard = ({ categoryName, imageUri }) => {
  return (
    <TouchableOpacity style={[styles.card, styles.shadowProp]} onPress={()=>{console.log(`${categoryName} is chosen`)}}>
        <Image style={styles.image} source={{uri: `${imageUri}`}} />
        <View style={styles.textContainer}>
            <Text style={styles.text}>
                {categoryName}
            </Text>
        </View>
    </TouchableOpacity>
  );
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
        marginBottom : 25,
        borderRadius : 15,
        backgroundColor : '#FFFFFF',
        justifyContent: "flex-start"
    },
    image : {
        width : '100%',
        height : '80%'
    },
    textContainer : {
        alignItems : 'center',
        justifyContent: "flex-start"
    },
    text : {
        fontWeight : 'bold',
        fontSize : 12,
        textAlign: "center",
        textAlignVertical: "top",
    },
});

export default CategoryCard;
