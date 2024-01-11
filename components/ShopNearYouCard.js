// Ref : 
// React-native : Dynamically update header title in stack navigator:
// https://stackoverflow.com/questions/46200454/react-native-dynamically-update-header-title-in-stack-navigator
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Divider, Image } from "@rneui/themed";
import {
    useFonts,
    Rubik_400Regular,
  } from '@expo-google-fonts/rubik';
import {Tag, Star} from 'phosphor-react-native';

const ShopNearYouCard = ({ navigation, shopName, serviceCategory, farness, priceRange, star, reviewNo, imageUri }) => {
    // const navigation = useNavigation()

let [fontsLoaded] = useFonts({
    Rubik_400Regular,
    });

    if (!fontsLoaded) {
    return (<View style={styles.container}></View>);
    } else {
    return (
    <View>
    <TouchableOpacity style={[styles.card]} onPress={() => {navigation.navigate("ShopOverview", {name: shopName, serviceCategory: serviceCategory, farness: farness, star: star, reviewNo: reviewNo})}}>
        <View style={styles.info}>
            <View style={styles.detailsContainer}>
                <Text style={[styles.shopNameText]}>
                    {shopName}
                </Text>
                <Text style={[styles.text]}>
                    {serviceCategory} | {farness} from you
                </Text>
                <Text style={[styles.normalText]}>
                    <Tag color="#938FC7" weight="fill" size={18}/> {priceRange}
                </Text>
                <Text style={[styles.normalText]}>
                    <Star color="#938FC7" weight="fill" size={18}/> {star} {reviewNo != 0 ? `(${reviewNo} reviews)` : "(new shop!)" }
                </Text>
            </View>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={{uri: `${imageUri}`}} />
            </View>
        </View>   
    </TouchableOpacity>
    <Divider width={2} color="#DEDEDE"/>
    </View>
  )}
};

const styles = StyleSheet.create({
    card : {
        width : '100%',
        height: 120,
        padding: 8,
        borderRadius : 15,
        justifyContent: "center",
        alignItems: "center",
    },
    shadowProp: {
        shadowOffset: { width: 3, height: 3 },
        shadowColor: 'black',
        shadowOpacity: 0.3,
        elevation: 5,
    },
    info: {
        flexDirection: "row",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
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
        alignContent: "center",
        rowGap: 5
    },
    shopNameText: {
        fontSize : 16,
        fontFamily: "Rubik_400Regular"
    },
    normalText: {
        fontSize : 14,
        fontFamily: "Rubik_400Regular"
    },
    text : {
        textAlign: "left",
        textAlignVertical: "top",
        fontFamily: "Rubik_400Regular",
        fontSize: 12,
        color: "#6D6767"
    },
});

export default ShopNearYouCard;
