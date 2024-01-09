// Ref :
// Map: https://github.com/react-native-maps/react-native-maps
// https://www.youtube.com/watch?v=xcn-0LyX6JY

import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { LinearProgress } from '@rneui/themed';

export default function RatingsAndReviews({route, navigation}) {
    let star = route.params.star
    const reviewNo = route.params.reviewNo
    const initialArr = [{star: 5, val: 43}, {star: 4, val: 20}, {star: 3, val: 30}, {star: 2, val: 5}, {star: 1, val: 2}]
    return (
        <ScrollView style={styles.container}>
            <View style={styles.ratingsContainer}>
                <View style={styles.starOverall}>
                    <View style={styles.star}>
                        <Text style={{fontSize: 50, fontWeight: "bold"}}>{star}{'\t'}</Text> 
                        <Ionicons name='star' size={45} color={"purple"}/>
                    </View>
                    <Text>{reviewNo != 0 ? `${reviewNo} reviews` : "(new shop!)" }</Text>
                </View>
                <View style={styles.ratingStackContainer}>
                    {initialArr.map((data, idx) => {
                        return (
                            <View style={styles.ratingsStack}>
                                <Text>{data.star}</Text>
                                <LinearProgress key={idx}
                                value={data.val/100}
                                animation={false}
                                style={styles.bar}
                                color="tomato"
                                trackColor="gray"
                                />
                            </View>
                        );
                    })}      
                </View>
            </View>
            <Text style={styles.headerText}>Reviews</Text>
        </ScrollView>
    );
  }

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: "4%"
    },
    ratingsContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    starOverall: {
        alignItems: "center",
        width: "35%"
    },
    star: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    ratingStackContainer: {
        width: "60%",
        alignItems: "center",
        padding: 5
    },
    bar: {
        height: 10,
        borderRadius: 5,
        width: "75%",
        alignSelf: "center",
        marginLeft: 10
      },
    ratingsStack: {
        flexDirection: "row",
    },
    headerText: {
        fontSize: 18,
        fontWeight: "700",
        marginVertical: 4
    }
})