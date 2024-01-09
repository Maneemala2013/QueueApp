import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { SearchBar, Button, Card, Image } from '@rneui/themed';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CategoryCard from '../components/CategoryCard.js';
import ShopNearYouCard from '../components/ShopNearYouCard.js';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function ShopOverview() {
    return(
        <View style={styles.container}>
            <Text>Shop Name</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})