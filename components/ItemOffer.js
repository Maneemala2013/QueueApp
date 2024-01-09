import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { Divider, Button } from '@rneui/themed';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CategoryCard from '../components/CategoryCard.js';
import ShopNearYouCard from '../components/ShopNearYouCard.js';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function ItemOffer({title, time, discountedPrice, price}) {
    return (
        <View style={styles.itemOfferContainer}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.rowContainer}>
                <View style={styles.moreInfoText}>
                    <Ionicons name='time' size={25} color={"purple"}/>
                    <Text>{'\t'}{time}</Text>
                </View>
                <Button radius={"md"} title="Book" type="outline" buttonStyle={{backgroundColor: "#ffffff", borderColor: "tomato"}}>
                    <Text style={{fontWeight: "bold"}}>Book</Text>
                </Button>
            </View>
            <View style={[styles.rowContainer, {marginBottom: 5}]}>
                <View style={styles.moreInfoText}>
                    <Ionicons name='pricetag' size={25} color={"purple"}/>
                    {discountedPrice != -1 ? <Text style={{textDecorationLine: "line-through"}}>{'\t'}$ {discountedPrice}</Text> : <Text>{'\t'}$ {price}</Text>}
                    {discountedPrice != -1 && <Text>{'\t'}$ {price}</Text>}
                </View>
            </View>
            <Divider width={1}/>
        </View>
    )
}

const styles = StyleSheet.create({
    itemOfferContainer: {
        marginBottom: 5
    },
    title: {
        fontSize: 16,
        fontWeight: "500"
    },
    rowContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        margin: 3
    },
    moreInfoText: {
        flexDirection: "row",
        alignItems: "center",
    }
})