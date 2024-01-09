// Ref : 
// React-native : Dynamically update header title in stack navigator:
// https://stackoverflow.com/questions/46200454/react-native-dynamically-update-header-title-in-stack-navigator
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Image } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";

const ShopNearYouCard = ({ navigation, shopName, serviceCategory, farness, priceRange, star, reviewNo, imageUri }) => {
    // const navigation = useNavigation()
    return (
    // <View style={styles.container}>
    <TouchableOpacity style={[styles.card, styles.shadowProp]} onPress={() => {navigation.navigate("ShopOverview", {name: shopName, serviceCategory: serviceCategory, farness: farness, star: star, reviewNo: reviewNo})}}>
        <View style={styles.info}>
            <View style={styles.detailsContainer}>
                <Text style={[styles.shopNameText, styles.text]}>
                    {shopName}
                </Text>
                <Text style={[styles.normalText, styles.text]}>
                    {serviceCategory} | {farness} from you
                </Text>
                <Text style={[styles.normalText, styles.text]}>
                    {priceRange}
                </Text>
                <Text style={[styles.normalText, styles.text]}>
                    {star} <Ionicons name={"star"} size={22} /> {reviewNo != 0 ? `(${reviewNo} reviews)` : "(new shop!)" }
                </Text>
            </View>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={{uri: `${imageUri}`}} />
            </View>
        </View>
    </TouchableOpacity>
    // </View>
  );
};

const styles = StyleSheet.create({
    card : {
        width : '100%',
        height: 120,
        marginBottom : 10,
        padding: 8,
        borderRadius : 15,
        backgroundColor : '#FFFFFF',
        justifyContent: "center",
        alignItems: "center",
    },
    shadowProp: {
        shadowOffset: { width: 12, height: 10 },
        shadowColor: 'black',
        shadowOpacity: 0.6,
        elevation: 5,
    },
    info: {
        flexDirection: "row",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        shadowColor: "black",
        shadowOffset: {
            width: 6,
            height: 6
        },
        shadowOpacity: 0.6,
        shadowRadius: 0.5
    },
    imageContainer: {
        width: "30%",
        maxHeight: "100%",
        alignItems: "flex-end",
        overflow: "hidden",
    },
    image : {
        width : 100,
        height: 100,
        resizeMode: "center",
        borderRadius: 15
    },
    detailsContainer : {
        width: "70%",
        height: "100%",
        justifyContent: "center",
        alignContent: "center"
    },
    shopNameText: {
        fontWeight : 'bold',
        fontSize : 16,
    },
    normalText: {
        fontWeight : 600,
        fontSize : 12,
    },
    text : {
        textAlign: "left",
        textAlignVertical: "top",
    },
});

export default ShopNearYouCard;
