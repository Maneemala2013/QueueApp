import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { Divider, Button } from '@rneui/themed';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CategoryCard from '../components/CategoryCard.js';
import ShopNearYouCard from '../components/ShopNearYouCard.js';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
    useFonts,
    Rubik_400Regular,
    Rubik_600SemiBold
  } from '@expo-google-fonts/rubik';
import {Clock, Tag} from "phosphor-react-native"

function convertTimeFormat(timeStr) {
    let dhm = timeStr.split(":")
    // Assume that we ignore day as the required time slots should be less than 1 day
    let h = Number(dhm[1]) == 0 ? "" : `${Number(dhm[1])} h`
    let m = Number(dhm[2]) == 0 ? "" : `${Number(dhm[2])} m`
    if (Number(dhm[1]) == 0) {
        return m
    }
    else {
        return (`${h} ${m}`)
    }
}
export default function ItemOffer({route, navigation, serviceId, shopId, shopName, title, time, discountedPrice, price, timeSlot}) {
    console.log("timeSlot", timeSlot)
    let [fontsLoaded] = useFonts({
        Rubik_400Regular,
        Rubik_600SemiBold
      });
    
    if (!fontsLoaded) {
    return (<View style={styles.itemOfferContainer}></View>)
    } else {
        return (
            <View style={styles.itemOfferContainer}>
                <Text style={styles.title}>{title}</Text>
                <View style={styles.rowContainer}>
                    <View style={styles.moreInfoText}>
                        <Clock size={18} color={"#938FC7"} weight="fill"/>
                        <Text style={styles.text}>{'\t'}{convertTimeFormat(time)}</Text>
                    </View>
                    <Button radius={"md"} title="Book" type="outline" buttonStyle={{backgroundColor: "#ffffff", borderColor: "tomato"}} onPress={() => {navigation.navigate("BookingForm", {name: title, serviceId: serviceId, shopId: shopId, shopName: shopName, time: time, discountedPrice: discountedPrice, price: price, timeSlot: timeSlot})}}>
                        <Text style={{fontFamily: "Rubik_600SemiBold", fontSize: 16}}>Book</Text>
                    </Button>
                </View>
                <View style={[styles.rowContainer, {marginBottom: 10}]}>
                    <View style={styles.moreInfoText}>
                        <Tag size={18} color={"#938FC7"} weight='fill'/>
                        {discountedPrice != -1 && <Text style={[styles.text, {textDecorationLine: "line-through", color: "#8B8585"}]}>{'\t'}$ {price}</Text>}
                        {discountedPrice != -1 && <Text>{'\t'}$ {discountedPrice}</Text>}
                        {discountedPrice == -1 && <Text style={styles.text}>{'\t'}$ {price}</Text>}
                    </View>
                </View>
                <Divider width={2} color="#DEDEDE"/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    itemOfferContainer: {
        marginBottom: 10
    },
    title: {
        fontSize: 16,
        fontFamily: "Rubik_400Regular"
    },
    rowContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: 2
    },
    moreInfoText: {
        flexDirection: "row",
        alignItems: "center",
    },
    text: {
        fontSize: 14,
        fontFamily: "Rubik_400Regular"
    }
})