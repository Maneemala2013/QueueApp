import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React, {useState, useEffect} from 'react';
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
import "../Global"

const Stack = createNativeStackNavigator();

export default function ShopOverview({route, navigation}) {
    const shopName = route.params.name
    const shopId = route.params.shopId
    const serviceCategory = route.params.serviceCategory
    const farness = route.params.farness
    const star = route.params.star
    const reviewNo = route.params.reviewNo
    const timeSlot = route.params.timeSlot

    console.log("timeSlot ShopOverview: ", timeSlot)

    const [serviceList, setServiceList] = useState([])
    const [isLoading, setLoading] = useState(true);

    async function getServiceList() {
        // console.log(shopId)
        let tmp = []
        let tmp2 = []
        await fetch(`http://${global.ipAddress}:8000/shop/${shopId}/`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
        })
        .then((resp) => resp.json())
        .then((data) => {
            let serviceIds = data.data.relationships.service_set.data
            serviceIds.map((serviceId) => {
                tmp.push(serviceId.id)
            })
            console.log("tmp", tmp);
            console.log("1")
        }).catch(error => {console.log("error", error)})
    
        await Promise.all(tmp.map(async (service, idx) => {
            // console.log(service)
            console.log("2")
            await fetch(`http://${global.ipAddress}:8000/service/${service}/`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
                })
                .then((resp) => resp.json())
                .then((data) => {
                    let b = data.data.attributes
                    b['id'] = data.data.id
                    tmp2.push(b)
                    console.log("tmp2: ", tmp2)
                }).catch(error => {console.log("error", error)})
        })).then(() => {
            setServiceList(tmp2)
            console.log(serviceList)
            setLoading(false)})
    }



    useEffect(() => {
        getServiceList();
    }, [])

    let [fontsLoaded] = useFonts({
        Rubik_400Regular,
        Rubik_600SemiBold,
        Rubik_800ExtraBold,
        Rubik_900Black,
      });
    
      if (!fontsLoaded |  isLoading | serviceList.length == 0) {
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
                        <Button radius={"lg"} title="Book" type="clear" buttonStyle={{backgroundColor: "transparent", borderColor: "tomato", alignItems: "center"}} onPress={() => {navigation.navigate("MoreInfo", {name: "More Info", shopId: shopId, shopName: shopName, serviceCategory: serviceCategory, farness: farness, star: star, reviewNo: reviewNo, timeSlot: timeSlot})}}>
                            <ArrowRight color="#E56014" weight="bold"/>
                        </Button>
                    </View>
                    <View style={styles.rowContainer}>
                        <View style={styles.moreInfoText}>
                            <Star/>
                            <Text style={styles.topText}>{'\t'}{star} {reviewNo != 0 ? `(${reviewNo} reviews)` : "(new shop!)" }</Text>
                        </View>
                        <Button radius={"lg"} title="Book" type="clear" buttonStyle={{backgroundColor: "transparent", borderColor: "tomato", alignItems: "center"}} onPress={() => {navigation.navigate("RatingsAndReviews", {name: "Ratings and Reviews", shopId: shopId, shopName: shopName, serviceCategory: serviceCategory, farness: farness, star: star, reviewNo: reviewNo, timeSlot: timeSlot})}}>
                            <ArrowRight color="#E56014" weight="bold"/>
                        </Button>
                    </View>
                </View>
                <View style={styles.sectionContainer}>
                    <Text style={styles.headerText}>Promotion</Text>
                    {serviceList.map((service, idx) => {                      
                            return(
                                service.discountedPrice > -1 && <ItemOffer key={service+idx} navigation={navigation} serviceId={service.id} shopId={shopId} shopName={shopName} title={service.service_name} time={service.duration} discountedPrice={service.discountedPrice} price={service.price} timeSlot={timeSlot}/>
                        )
                    })}
                </View>
                <View style={styles.sectionContainer}>
                    <Text style={styles.headerText}>Service Items</Text>
                    {serviceList.map((service, idx) => {                      
                            return(
                                service.discountedPrice == -1 && <ItemOffer key={service+idx} navigation={navigation} serviceId={service.id} shopId={shopId} shopName={shopName} title={service.service_name} time={service.duration} discountedPrice={service.discountedPrice} price={service.price} timeSlot={timeSlot}/>
                        )
                    })}
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