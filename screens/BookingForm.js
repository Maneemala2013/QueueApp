import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Button } from '@rneui/themed';
import ItemOffer from '../components/ItemOffer';
import DatePicker from '../components/DatePicker';
import {
    useFonts,
    Rubik_400Regular,
    Rubik_600SemiBold,
  } from '@expo-google-fonts/rubik';
import { Clock, Tag } from 'phosphor-react-native';

export default function BookingForm({route, navigation}) {
    const time = route.params.time
    const discountedPrice = route.params.discountedPrice
    const price = route.params.price

    let [fontsLoaded] = useFonts({
        Rubik_400Regular,
        Rubik_600SemiBold,
      });
    
    if (!fontsLoaded) {
    return (<ScrollView style={styles.container}></ScrollView>);
    } else {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.moreInfoText}>
                    <Clock color="#938FC7" weight="fill" size={18}/>
                    <Text style={styles.topText}>{time}</Text>
                </View>
                <View style={styles.moreInfoText}>
                    <Tag color="#938FC7" weight="fill" size={18}/>
                    {discountedPrice != -1 ? <Text style={[styles.topText, {color: "#8B8585", textDecorationLine: "line-through"}]}>$ {discountedPrice}</Text> : <Text style={styles.topText}>{'\t'}$ {price}</Text>}
                    {discountedPrice != -1 && <Text style={styles.topText}>$ {price}</Text>}
                </View>
                <View style={styles.dateTimeFormContainer}>
                    <Text style={styles.topText}>Date</Text>
                    <DatePicker/>
                </View>
            </ScrollView>
            );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: "4%"
    },
    moreInfoText: {
        flexDirection: "row",
        alignItems: "center",
        columnGap: 5,
        marginBottom: 10
    },
    dateTimeFormContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    topText: {
        fontSize: 16,
        fontFamily: "Rubik_400Regular"
    }
})