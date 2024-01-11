import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ItemOffer from '../components/ItemOffer.js';
import { Button } from '@rneui/themed';
import { Info, Star, Clock, Tag, ArrowRight, IconContext } from 'phosphor-react-native';
import {
    useFonts,
    Rubik_400Regular,
    Rubik_600SemiBold,
    Rubik_800ExtraBold,
    Rubik_900Black,
  } from '@expo-google-fonts/rubik';

const Stack = createNativeStackNavigator();

export default function ShopOverview({route, navigation}) {
    const shopName = route.params.name
    const serviceCategory = route.params.serviceCategory
    const farness = route.params.farness
    const star = route.params.star
    const reviewNo = route.params.reviewNo

    let [fontsLoaded] = useFonts({
        Rubik_400Regular,
        Rubik_600SemiBold,
        Rubik_800ExtraBold,
        Rubik_900Black,
      });
    
      if (!fontsLoaded) {
        return (<ScrollView style={styles.container}></ScrollView>);
      } else {

        return(
            <IconContext.Provider
            value={{
                color: "#938FC7",
                size: 18,
                weight: "fill"
            }}>
            <ScrollView style={styles.container}>
                <View style={styles.sectionContainer}>
                    <Text style={styles.categoryFarnessText}>{serviceCategory} - {farness} from you</Text>
                    <View style={styles.rowContainer}>
                        <View style={styles.moreInfoText}>
                            <Info/>
                            <Text style={styles.topText}>{'\t'}More info</Text>
                        </View>
                        <Button radius={"lg"} title="Book" type="clear" buttonStyle={{backgroundColor: "transparent", borderColor: "tomato", alignItems: "center"}} onPress={() => {navigation.navigate("MoreInfo", {name: `More Info - ${shopName}`})}}>
                            <ArrowRight color="#E56014" weight="bold"/>
                        </Button>
                    </View>
                    <View style={styles.rowContainer}>
                        <View style={styles.moreInfoText}>
                            <Star/>
                            <Text style={styles.topText}>{'\t'}{star} {reviewNo != 0 ? `(${reviewNo} reviews)` : "(new shop!)" }</Text>
                        </View>
                        <Button radius={"lg"} title="Book" type="clear" buttonStyle={{backgroundColor: "transparent", borderColor: "tomato", alignItems: "center"}} onPress={() => {navigation.navigate("RatingsAndReviews", {name: `Ratings and Reviews - ${shopName}`, star: star, reviewNo: reviewNo})}}>
                            <ArrowRight color="#E56014" weight="bold"/>
                        </Button>
                    </View>
                </View>
                <View style={styles.sectionContainer}>
                    <Text style={styles.headerText}>Promotion</Text>
                    <ItemOffer navigation={navigation} title="Hand and feet spa 2 for 1" time="1h 30m" discountedPrice={150} price={300} />
                    <ItemOffer navigation={navigation} title="Manicure" time="1h 30m" discountedPrice={-1} price={150} />
                </View>
                <View style={styles.sectionContainer}>
                    <Text style={styles.headerText}>Manicure</Text>
                    <ItemOffer navigation={navigation} title="Signature Gel Manicure with Chrome Powder / Cat Eye" time="1h 30m" discountedPrice={-1} price={150} />
                    <ItemOffer navigation={navigation} title="Manicure" time="1h 30m" discountedPrice={-1} price={150} />
                </View>
            </ScrollView>
            </IconContext.Provider>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: "4%"
    },
    sectionContainer: {
        marginBottom: 10
    },
    rowContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    moreInfoText: {
        flexDirection: "row",
        alignItems: "center",
    },
    headerText: {
        fontSize: 18,
        fontFamily: "Rubik_600SemiBold",
        marginBottom: 10
    },
    topText: {
        fontFamily: "Rubik_400Regular",
        fontSize: 16
    },
    categoryFarnessText : {
        textAlign: "left",
        textAlignVertical: "top",
        fontFamily: "Rubik_400Regular",
        fontSize: 12,
        color: "#6D6767"
    },
})