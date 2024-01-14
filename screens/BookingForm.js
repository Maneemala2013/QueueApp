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
    console.log("shopId Booking", shopId)
    const [isLoading, setIsLoading] = useState(true)
    const [availableSlots, setAvailableSlots] = useState([])
    const [selectedTime, setSelectedTime] = useState("---")
    const [selectedEndTime, setSelectedEndTime] = useState("")
    const [remark, setRamark] = useState("N/A")
    // const options = {
	// 	weekday: "short",
	// 	year: "numeric",
	// 	month: "short",
	// 	day: "numeric",
	//   };
    function getUpdatedSlots() {
        let day = date.split("/")[1]
        let h = Number(selectedTime.split(":")[0])
        let m = Number(selectedTime.split(":")[1])
        let start_idx = 0
        start_idx = (day - 1) * 48 + (h * 2 + m / 30)
        let end_idx = start_idx + convertTimeStrToMins(time)/30
        
        let timeSlotList = timeSlot.split(",")
        let i = 0
        for(i = start_idx; i < end_idx; i++) {
            timeSlotList[i]--
        }
        str = timeSlotList.toString()
        console.log("str", str)
        return (str)
    }
    const [date, setDate] = useState(new Date().toLocaleDateString('zh-hk'))

    function getEndTime(l) {
        let splitted = l.split(":")
        // console.log(splitted)
        let min = 0
        min = min + (Number(splitted[0]) * 60)
        min = min + (Number(splitted[1]))
        min = min + convertTimeStrToMins(time)
        // console.log(min)
        let h = (min - min % 60 )/ 60
        let m = min % 60
        if (m == 0) {
            m = "00"
        }
        // console.log("end h", h)
        // console.log("end m", m)
        setSelectedEndTime(`${h}:${m}`)
    }

    async function submit(appointment) {
        let tmp = []
        console.log(shopId)
        await Promise.all(fetch(`http://${global.ipAddress}:8000/appointment/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(appointment),
        })
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data)
        }).catch(error => {console.log(error)}))

        update();
    }

    async function getSlots(day){
        console.log("day", day)
        const requiredSlots = convertTimeStrToMins(time) / 30
        let timeSlotList = timeSlot.split(",")
        console.log("getSlots", typeof(timeSlotList))
        let tmp = []
        let i = 0
        for (i = (day-1) * 48; i <= (day-1) * 48 + 48 - requiredSlots; i++) {
            if (timeSlotList[i] > 0) {
                let meet = true
                let j = 0
                for (j = i + 1; j <= i + requiredSlots - 1; j++) {
                    console.log("j", j)
                    if (timeSlotList[j] == 0){
                        meet = false
                    }
                }
                if (meet){
                    console.log("push")
                    tmp.push(i % 2 == 0 ? `${(i % 48) / 2}:00` : `${((i-1) % 48) / 2}:30`)
                    console.log(`${i}|${timeSlotList[i]}:${j}|${timeSlotList[j]}`)
                }
            // console.log(`${i}|${timeSlot[i]}:${j}|${timeSlot[j]}`)
            }
            else {
                continue
            }
        }
        setAvailableSlots(tmp)
        if (tmp.length > 0) {
            setSelectedTime(tmp[0])
            getEndTime(tmp[0])
        }
        else {
            setSelectedTime("---")
        }
        console.log("availableSlots", tmp)
        return(availableSlots)
        
    }

    async function update() {
        let newTimeSlots = getUpdatedSlots()
        // console.log(shopId)
        let obj = null
        await fetch(`http://${global.ipAddress}:8000/shop/${shopId}/`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
        })
        .then((resp) => resp.json())
        .then((data) => {
            obj = (data.data.attributes)
            obj['available_time_slot'] = newTimeSlots
            // let service_set 
            obj['service_set'] = data.data.relationships.service_set.data.map((ele) => `http://${global.ipAddress}:8000/service/${ele.id}/`)
            obj['appointment_set'] = data.data.relationships.appointment_set.data.map((ele) => `http://${global.ipAddress}:8000/appointment/${ele.id}/`)
            console.log("obj1: ", obj)
        }).catch(error => {console.log(error)})
        
        fetch(`http://${global.ipAddress}:8000/shop/${shopId}/`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(obj),
        })
        .then((resp) => resp.json())
        .then((data) => {
            console.log("obj2: ", obj)
            console.log("updated data: ", data)
        }).catch(error => {console.log(error)})
    }

    useEffect(() => {
        setIsLoading(true)
        getSlots(date.split("/")[1]);
        // getStartTime()
        // setSelectedTime("---")
    }, [date])

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
                    <View style={{ width: "80%" }}>
                        {!isLoading && <TimeSlotPicker availableSlots={availableSlots} selectedTime={selectedTime} setSelectedTime={setSelectedTime} setSelectedEndTime={setSelectedEndTime} time={convertTimeStrToMins(time)}/>}
                        {availableSlots.length == 0 && <Text style={styles.message}>Sorry, there is no available time slot. Please select other dates.</Text>}
                    </View>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.topText}>Remarks</Text>
                    <TextInput placeholder='Enter any details you want the shop to know about you' style={styles.input} onChangeText={setRamark}/>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.topText}>Discount code</Text>
                    <TextInput placeholder='Enter discount code' style={[styles.input, {height: 50}]}/>
                </View>
                </ScrollView>
                <View style={{ width: "100%", marginTop: 10}}>
                <Button title={"Book Service"} buttonStyle={{backgroundColor: "#EC7632", width: "100%", borderRadius: 10}} titleStyle={{fontSize: 16, fontFamily: "Rubik_600SemiBold"}} onPress={() => {
                    submit(
                        {
                            "service_name": title,
                            "remark": remark,
                            "user": "86fba2c2-2911-4f38-90f2-24c03db977ad",
                            "shop": shopId,
                            "date": date,
                            "start_time": `${selectedEndTime}`,
                            "end_time": `${selectedEndTime}`
                        })
                    navigation.navigate("SuccessfulBooking", {title: title, shopName: shopName, date: date, startTime: selectedTime, endTime: selectedEndTime, price: discountedPrice == -1 ? price : discountedPrice})}}></Button>
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
        alignItems: "flex-start",
        marginBottom: 10,
    },
    topText: {
        fontSize: 16,
        fontFamily: "Rubik_400Regular",
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
    },
    message: {
        textAlign: "right",
        fontFamily: "Rubik_400Regular",
        color: "red"
    }
})