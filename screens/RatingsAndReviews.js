// Ref :
// Map: https://github.com/react-native-maps/react-native-maps
// https://www.youtube.com/watch?v=xcn-0LyX6JY

import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { LinearProgress } from '@rneui/themed';
import ReviewsCard from '../components/ReviewsCard';
import { Star } from 'phosphor-react-native';
import {
    useFonts,
    Rubik_400Regular,
    Rubik_600SemiBold,
  } from '@expo-google-fonts/rubik';

export default function RatingsAndReviews({route, navigation}) {
    const shopName = route.params.name
    let star = route.params.star
    const reviewNo = route.params.reviewNo
    const initialArr = [{star: 5, val: 43}, {star: 4, val: 20}, {star: 3, val: 30}, {star: 2, val: 5}, {star: 1, val: 2}]
    
    let [fontsLoaded] = useFonts({
        Rubik_400Regular,
        Rubik_600SemiBold,
      });
    
    if (!fontsLoaded) {
    return (<View style={styles.container}></View>);
    } else {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.ratingsContainer}>
                <View style={styles.starOverall}>
                    <View style={styles.star}>
                        <Text style={styles.starText}>{star}{'\t'}</Text> 
                        <Star color="#938FC7" weight="fill" size={31}/>
                    </View>
                    <Text style={styles.reviewNoText}>{reviewNo != 0 ? `${reviewNo} reviews` : "(new shop!)" }</Text>
                </View>
                <View style={styles.ratingStackContainer}>
                    {initialArr.map((data, idx) => {
                        return (
                            <View key={data.star+shopName} style={styles.ratingsStack}>
                                <Text style={styles.rateText}>{data.star}</Text>
                                <LinearProgress
                                value={data.val/100}
                                animation={false}
                                style={styles.bar}
                                color="tomato"
                                trackColor="#DEDDDD"
                                />
                            </View>
                        );
                    })}      
                </View>
            </View>
            <Text style={styles.headerText}>Reviews</Text>
            <ReviewsCard givenStar={5} date={"1/10/23"} writer={"Tiffany Lo"} comments={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent bibendum nulla nibh"}/>
            <ReviewsCard givenStar={5} date={"1/10/23"} writer={"Tiffany Lo"} comments={"Lorem ipsum"}/>
            <ReviewsCard givenStar={5} date={"1/10/23"} writer={"Tiffany Lo"} comments={"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. "}/>
            <ReviewsCard givenStar={5} date={"1/10/23"} writer={"Tiffany Lo"} comments={"Habcd"}/>
            <ReviewsCard givenStar={5} date={"1/10/23"} writer={"Tiffany Lo"} comments={"At vero eos et accusamus "}/>
        </ScrollView>
    );
    }
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
        width: "30%",
    },
    star: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    ratingStackContainer: {
        width: "70%",
        alignItems: "flex-end",
        padding: 5
    },
    bar: {
        height: 10,
        borderRadius: 5,
        width: "85%",
        marginLeft: 10,
        marginBottom: 10
      },
    ratingsStack: {
        flexDirection: "row",
    },
    headerText: {
        fontSize: 18,
        fontWeight: "700",
        marginVertical: 4
    },
    starText: {
        fontSize: 36,
        fontFamily: "Rubik_600SemiBold"
    },
    reviewNoText: {
        fontSize: 14,
        fontFamily: "Rubik_400Regular"
    },
    rateText: {
        fontSize: 12,
        fontFamily: "Rubik_400Regular"
    }
})