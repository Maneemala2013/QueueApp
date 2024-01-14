import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import { Button, ListItem } from "@rneui/themed";
import { ScrollView } from "react-native-gesture-handler";

const TimeSlotPicker = ({availableSlots, selectedTime, setSelectedTime, setSelectedEndTime, time}) => {
	const [expanded, setExpanded] = useState(false)

    function getEndTime(l) {
        let splitted = l.split(":")
        let min = 0
        min = min + Number(splitted[0]) * 60
        min = min + Number(splitted[1])
        min = min + time
        console.log(l)
        let h = (min - min % 60 )/ 60
        let m = min % 60
        if (m == 0) {
            m = "00"
        }
        // console.log(`${h}:${m}`)
        setSelectedEndTime(`${h}:${m}`)
    }
    return (<View style={styles.container}>
	    <ListItem.Accordion containerStyle={{backgroundColor: "#E4E3F1", borderRadius: 5, width: 200, height: 40, padding: 5}} 
            // style={{width: "85%", justifyContent: "flex-start", alignItems: "flex-start"}}
            content={
                <>
                <ListItem.Content>
                    <ListItem.Title style={{color: "black", fontFamily: "Rubik_400Regular", alignSelf: "center"}}>{selectedTime}</ListItem.Title>
                </ListItem.Content>
                </>
            }
            isExpanded={expanded}
            onPress={() => {
                setExpanded(!expanded);
            }}
            >
            {availableSlots != [] && availableSlots.map((l, i) => (
                <ListItem key={i} bottomDivider onPress={() => {
                    setSelectedTime(l)
                    getEndTime(l)
                    setExpanded(false)
                }} containerStyle={{backgroundColor: "#ffffff", borderRadius: 5, width: 200, height: 40, padding: 10}}>
                <ListItem.Content >
                    <ListItem.Title style={{alignSelf: "center"}}>{l}</ListItem.Title>
                </ListItem.Content>
                </ListItem>
            ))}
        </ListItem.Accordion>
	</View>)
    // }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "flex-end"
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

export default TimeSlotPicker;
