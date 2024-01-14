import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import DatePicker from '../components/DatePicker';
import TimePicker from '../components/TimePicker';
import {
    useFonts,
    Rubik_400Regular,
    Rubik_600SemiBold,
  } from '@expo-google-fonts/rubik';
import { Clock, Tag } from 'phosphor-react-native';
import { TextInput } from 'react-native';
import { Button, ListItem, Icon } from '@rneui/themed';
import "../Global"
import TimeSlotPicker from '../components/TimeslotPicker';
import moment from "moment";
import "moment/locale/zh-hk";
moment.locale("zh-hk");

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

function convertTimeStrToMins(timeStr) {
    let dhm = timeStr.split(":")
    let min = 0
    // Assume that we ignore day as the required time slots should be less than 1 day
    min = min + Number(dhm[1] * 60)
    min = min + Number(dhm[2])
    return(min)
}

export default function BookingForm({route, navigation}) {
    const serviceId = route.params.serviceId
    const shopId = route.params.shopId
    const title = route.params.name
    const time = route.params.time
    const discountedPrice = route.params.discountedPrice
    const price = route.params.price
    const shopName = route.params.shopName
    const timeSlot = route.params.timeSlot
    console.log("timeSlot Booking", timeSlot)
    const [isLoading, setIsLoading] = useState(true)
    const [availableSlots, setAvailableSlots] = useState([])
    const [selectedTime, setSelectedTime] = useState("Choose start time")
    const [selectedEndTime, setSelectedEndTime] = useState("")
    const options = {
		weekday: "short",
		year: "numeric",
		month: "short",
		day: "numeric",
	  };
    const [date, setDate] = useState(new Date().toLocaleDateString('zh-hk', options))

    // async function getAvailableTimeSlots() {
    //     let tmp = []
    //     console.log(shopId)
    //     await Promise.all(fetch(`http://${global.ipAddress}:8000/shop/${shopId}/`, {
    //     method: "GET",
    //     headers: {
    //         "Content-Type": "application/json",
    //     },
    //     })
    //     .then((resp) => resp.json())
    //     .then((data) => {
    //         setAvailableTimeSlots(data.data.attributes.available_time_slot.split(",").map((t) => (Number(t))))
    //     }).catch(error => {console.log(error)})).then(getSlots(timeSlots, time)).then(setIsLoading(false))
    // }

    async function getSlots(){
        const requiredSlots = convertTimeStrToMins(time) / 30
        console.log(requiredSlots)
        let timeSlotList = timeSlot.split(",")
        console.log("getSlots", typeof(timeSlotList))
        let tmp = []
        for (let i = 0; i <= timeSlotList.length - requiredSlots; i++) {
            if (timeSlotList[i] > 0) {
                let meet = true
                for (let j = i + 1; j <= i + requiredSlots - 1; j++) {
                    console.log(`${i}|${timeSlotList[i]}:${j}|${timeSlotList[j]}`)
                    if (timeSlotList[j] == 0){
                        meet = false
                    }
                }
                if (meet){
                    console.log("push")
                    // tmp.push(i)
                    tmp.push(i % 2 == 0 ? `${i / 2}:00` : `${(i-1) / 2}:30`)
                }
            // console.log(`${i}|${timeSlot[i]}:${j}|${timeSlot[j]}`)
            }
            else {
                continue
            }
        }
        setAvailableSlots(tmp)
        console.log("availableSlots", tmp)
        // setIsLoading(false)
        return(availableSlots)
        
    }

    useEffect(() => {
        getSlots();
    }, [])

    useEffect(() => {
        setIsLoading(false)
    }, [availableSlots])

    let [fontsLoaded] = useFonts({
        Rubik_400Regular,
        Rubik_600SemiBold,
      });
    
    if (!fontsLoaded) {
    return (<ScrollView></ScrollView>);
    } else {
        return (
            <View style={styles.container}>
                <ScrollView>
                <View style={styles.moreInfoText}>
                    <Clock color="#938FC7" weight="fill" size={18}/>
                    <Text style={styles.topText}>{convertTimeFormat(time)}</Text>
                </View>
                <View style={styles.moreInfoText}>
                    <Tag color="#938FC7" weight="fill" size={18}/>
                    {discountedPrice != -1 && <Text style={[styles.text, {textDecorationLine: "line-through", color: "#8B8585"}]}>{'\t'}$ {price}</Text>}
                    {discountedPrice != -1 && <Text> $ {discountedPrice}</Text>}
                    {discountedPrice == -1 && <Text style={styles.text}> $ {price}</Text>}
                    {/* {discountedPrice != -1 ? <Text style={[styles.topText, {color: "#8B8585", textDecorationLine: "line-through"}]}>$ {discountedPrice}</Text> : <Text style={styles.topText}>{'\t'}$ {price}</Text>}
                    {discountedPrice != -1 && <Text style={styles.topText}>$ {price}</Text>} */}
                </View>
                <View style={styles.dateTimeFormContainer}>
                    <Text style={styles.topText}>Date</Text>
                    <DatePicker setMyDate={setDate}/>
                </View>
                <View style={styles.dateTimeFormContainer}>
                    <Text style={styles.topText}>Time</Text>
                    {/* <Text style={styles.topText}>{timeSlots}</Text> */}
                    {!isLoading && <TimeSlotPicker availableSlots={availableSlots} selectedTime={selectedTime} setSelectedTime={setSelectedTime} setSelectedEndTime={setSelectedEndTime} time={convertTimeStrToMins(time)}/>}
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
                <Button title={"Book Service"} buttonStyle={{backgroundColor: "#EC7632", width: "100%", borderRadius: 10}} titleStyle={{fontSize: 16, fontFamily: "Rubik_600SemiBold"}} onPress={() => {navigation.navigate("SuccessfulBooking", {title: title, shopName: shopName, date: date, startTime: selectedTime, endTime: selectedEndTime, price: discountedPrice == -1 ? price : discountedPrice})}}></Button>
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