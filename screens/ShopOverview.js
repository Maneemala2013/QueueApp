import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { SearchBar, Button, Card, Image } from '@rneui/themed';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CategoryCard from '../components/CategoryCard.js';
import ShopNearYouCard from '../components/ShopNearYouCard.js';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

export default function ShopOverview({route, navigation}) {
    const serviceCategory = route.params.serviceCategory
    return(
        <View style={styles.container}>
            <Text>type: {serviceCategory}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})