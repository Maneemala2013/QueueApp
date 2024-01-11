import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';
import DatePicker from '../components/DatePicker';
import TimePicker from '../components/TimePicker';
import {
    useFonts,
    Rubik_400Regular,
    Rubik_600SemiBold,
  } from '@expo-google-fonts/rubik';
import { Clock, Tag } from 'phosphor-react-native';
import { TextInput } from 'react-native';
import { Button } from '@rneui/themed';

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
            <View style={styles.container}>
                <ScrollView>
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
                <View style={styles.dateTimeFormContainer}>
                    <Text style={styles.topText}>Time</Text>
                    <TimePicker/>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.topText}>Remarks</Text>
                    <TextInput placeholder='Enter any details you want the shop to know about you' style={styles.input}/>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.topText}>Discount code</Text>
                    <TextInput placeholder='Enter discount code' style={[styles.input, {height: 50}]}/>
                </View>
                </ScrollView>
                <View style={{ width: "100%", marginTop: 10}}>
                <Button title={"Book Service"} buttonStyle={{backgroundColor: "#EC7632", width: "100%", borderRadius: 10}} titleStyle={{fontSize: 16, fontFamily: "Rubik_600SemiBold"}}></Button>
                </View>
            </View>
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
        alignItems: "center",
        marginBottom: 10
    },
    topText: {
        fontSize: 16,
        fontFamily: "Rubik_400Regular"
    },
    input: {
        width: "100%",
        height: 85,
        borderRadius: 10,
        backgroundColor: "white",
        borderColor: "#8B8585",
        borderWidth: 1,
        alignItems: "center",
        justifyContent: "center",
        textAlignVertical: "top",
        padding: 8,
        fontFamily: "Rubik_400Regular",
        fontSize: 14,
        margin: 0,
    },
    inputContainer: {
        marginBottom: 10,
        rowGap: 10,
    }
})