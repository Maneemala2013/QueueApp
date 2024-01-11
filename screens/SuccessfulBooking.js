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
import { CheckCircle, Seal, MapPin } from 'phosphor-react-native'

export default function SuccessfulBooking({route, navigation}) {

    // const date = route.params.date
    // const time = route.params.time
    const title = route.params.title
    const shopName = route.params.shopName

    let [fontsLoaded] = useFonts({
        Rubik_400Regular,
        Rubik_600SemiBold,
      });
    
    if (!fontsLoaded) {
    return (<ScrollView></ScrollView>);
    } else {
        return (
            <View style={styles.container}>
                    <CheckCircle color="#938FC7" weight='fill' size={52}/>
                    <Text style={{fontFamily: "Rubik_600SemiBold", fontSize: 16}}>You have successfully booked the service. You can check your bookuing information in Bookings page</Text>
                    <View style={styles.detailsContainer}>
                        <Text style={{fontFamily: "Rubik_400Regular", fontSize: 14}}>20/1/24 10:00 - 11:00</Text>
                        <View style={styles.infoText}>
                            <Seal color='#938FC7' weight='fill' size={15}/>
                            <Text style={styles.regularText}>{title}</Text>
                        </View>
                        <View style={styles.infoText}>
                            <MapPin color='#938FC7' weight='fill' size={15}/>
                            <Text style={styles.regularText}>{shopName}</Text>
                        </View>
                    </View>
                    <View style={{ width: "100%", position: "absolute", bottom: 10}}>
                        <Button title={"Back to Home"} buttonStyle={{backgroundColor: "#EC7632", width: "100%", borderRadius: 10}} titleStyle={{fontSize: 16, fontFamily: "Rubik_600SemiBold"}} onPress={() => {navigation.navigate("Explore")}}></Button>
                    </View>
            </View>
            );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: "4%",
        justifyContent: "center",
        alignItems: "center",
        rowGap: 25
    },
    detailsContainer: {
        textAlign: "left",
        width: "96%",
    },
    infoText: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 10,
        columnGap: 5
    },
    regularText: {
        fontFamily: "Rubik_400Regular",
        fontSize: 14
    }
})