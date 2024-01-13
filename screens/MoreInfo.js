// Ref :
// Map: https://github.com/react-native-maps/react-native-maps
// https://www.youtube.com/watch?v=xcn-0LyX6JY

import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React, {useState, useEffect} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MapView from 'react-native-maps';
import { Image, Button } from "@rneui/themed";
import { Clock, Cardholder, Phone, FacebookLogo, InstagramLogo, MapPin, IconContext, SpinnerGap } from 'phosphor-react-native';
import {Image as ImageLogo} from "phosphor-react-native";
import {
    useFonts,
    Rubik_400Regular,
    Rubik_600SemiBold,
  } from '@expo-google-fonts/rubik';

export default function MoreInfo({route, navigation}) {
    const shopId = route.params.shopId
    const shopName = route.params.shopName
    const serviceCategory = route.params.serviceCategory
    const farness = route.params.farness
    const star = route.params.star
    const reviewNo = route.params.reviewNo

    const onRegionChange = (region) => {
        console.log(region)
    }

    let [shopInfo, setShopInfo] = useState([])
    // let [workingHours, setWorkingHours] = useState([])

    function getShopInfo() {
            console.log(shopId)
            fetch(`http://127.0.0.1:8000/shop/${shopId}/`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            // body: JSON.stringify(shop),
            })
            .then((resp) => resp.json())
            .then((data) => {
                setShopInfo(data.data.attributes)
                console.log(data.data.attributes);
            }).catch(error => {console.log(error)});
    }

    let [fontsLoaded] = useFonts({
        Rubik_400Regular,
        Rubik_600SemiBold,
      });

    useEffect(() => {
        getShopInfo();
    }, [])
    
    if (!fontsLoaded) {
    return (<ScrollView style={styles.container} contentContainerStyle={{justifyContent: "center", alignItems: "center"}}>
        {/* <SpinnerGap color='#938FC7' size={20} weight='fill'/> */}
    </ScrollView>);
    } else {
        return (
            <IconContext.Provider
            value={{
                color: "#938FC7",
                size: 18,
                weight: "fill"
            }}>
                <ScrollView style={styles.container}>
                <View style={styles.sectionContainer}>
                    <View style={styles.section}>
                        <Text style={styles.text}>{shopInfo.shop_detail}</Text>
                        {/* <Text style={styles.text}>If you're looking for a nail salon in Hong Kong that offers something truly unique, the look no further than our salon. We're different from other salons in several ways, and we're proud to offer our clientele an experience that they won't forget. </Text> */}
                    </View>
                    <View style={styles.section}>
                        <View style={styles.infoText}>
                            <Clock/>
                            <Text style={styles.text}>{shopInfo.working_hour}</Text>
                        </View>
                        {/* {workingHours.map((working_hour, idx) => {
                            return (
                            <View style={styles.infoText}>
                                <Clock/>
                                <Text style={styles.text}>{working_hour}</Text>
                            </View>)})} */}
                        {/* <View style={styles.infoText}>
                            <Clock color="transparent"/>
                            <Text style={styles.text}>Fri - Sun 10:00 - 22:00</Text>
                        </View> */} 
                    </View>
                    <View style={styles.section}>
                        <View style={styles.infoText}>
                            <Cardholder/>
                            <Text style={styles.text}>{shopInfo.payment}</Text>
                            {/* <Text style={styles.text}>Cash, Octopus, Visa, Mastercard, Payme, Alipay</Text> */}
                        </View> 
                    </View>
                    <View style={styles.section}>
                        <View style={styles.infoText}>
                            <Phone/>
                            <Text style={[styles.text, {color: "#E56014"}]}>{shopInfo.phone_number}</Text>
                        </View> 
                    </View>
                    {/* <View style={styles.section}>
                        <View style={styles.infoText}>
                            <Ionicons name='mail' size={25} color={"purple"}/>
                            <Text>{'\t'}shop@email.com</Text>
                        </View> 
                    </View> */}
                    <View style={styles.section}>
                        <View style={styles.infoText}>
                            <FacebookLogo/>
                            <Text style={[styles.text, {color: "#E56014"}]}>{shopInfo.fb}</Text>
                        </View> 
                    </View>
                    <View style={styles.section}>
                        <View style={styles.infoText}>
                            <InstagramLogo/>
                            <Text style={[styles.text, {color: "#E56014"}]}>{shopInfo.ig_display}</Text>
                        </View> 
                    </View>
                    <View style={styles.section}>
                        <View style={styles.infoText}>
                            <MapPin/>
                            <View style={{width: "92%"}}>
                                <Text style={styles.text}>{shopInfo.location}</Text>
                                <Text style={[styles.text, {color: "#E56014", marginTop: 5}]}>Get Direction</Text>
                                <MapView style={[styles.map, styles.section]} customMapStyle={{borderRadius: 15}}
                                    // onRegionChange={onRegionChange}
                                    initialRegion={{
                                        latitude: 22.286934914936843,
                                        longitude: 114.154166824391,
                                        latitudeDelta: 0.5,
                                        longitudeDelta: 0}}/>
                            </View>
                        </View> 
                    </View>
                    <View style={[styles.galleryContainer, styles.section]}>
                        <ImageLogo/>
                        <View style={styles.gallery}>
                            <Image style={styles.image} source={{uri: "https://img.freepik.com/free-vector/aesthetic-cosmic-nail-salon-logo_23-2149852735.jpg?w=740&t=st=1704808895~exp=1704809495~hmac=1444d12811fc768842d1705c27c695b973ab87dca0c41d8a1ae9db1541e903e9"}} />
                            <Image style={styles.image} source={{uri: "https://img.freepik.com/free-photo/close-up-woman-getting-manicure-done_23-2149171309.jpg?w=996&t=st=1704810347~exp=1704810947~hmac=5665a2e77349c79e782f059127de746b5176f9e89f366a32008be6ff9c3d1919"}} />
                            <Image style={styles.image} source={{uri: "https://img.freepik.com/free-photo/close-up-beauty-nail-art_23-2149265991.jpg?w=900&t=st=1704810375~exp=1704810975~hmac=e5bd0ca7d30b551f7857d28f2d64244b300058dc4a771d75b31e1ff44cc367c1"}} />
                            <Image style={styles.image} source={{uri: "https://img.freepik.com/free-photo/close-up-woman-manicure-appointment_23-2149171329.jpg?w=996&t=st=1704810407~exp=1704811007~hmac=792980ecb8148aacf68e3d426ffa6684f909537d1441499f5198c7582603f2c9"}} />
                            <Image style={styles.image} source={{uri: "https://img.freepik.com/free-photo/manicure-process_1385-276.jpg?w=740&t=st=1704810574~exp=1704811174~hmac=6aa768924e78fabd1acb8a261a548ba85afcf5d005f85a290a0a33e77035fc9c"}} />
                            <Image style={styles.image} source={{uri: "https://img.freepik.com/free-photo/woman-using-digital-nail-file-front-view_23-2148766615.jpg?w=900&t=st=1704810596~exp=1704811196~hmac=37ae34fe73b5ecca70fc552219d417ac51ecd4e9a3a557c3840c200c75d866b2"}} />
                            <Image style={styles.image} source={{uri: "https://img.freepik.com/free-photo/young-man-doing-manicure-salon-beauty-concept_1301-3365.jpg?w=900&t=st=1704810804~exp=1704811404~hmac=ba012894694f594ad1a79114e7d22f89e9b93a6e4ae8e5570002e60abebce1d5"}} />
                            <Image style={styles.image} source={{uri: "https://img.freepik.com/free-vector/voucher-template-with-nail-salon-conceptwatercolor-stylexdxa_83728-8955.jpg?w=740&t=st=1704810648~exp=1704811248~hmac=b505b839acb54516ad8ee928d561c3feb3dc2bdc400753846e163171b44d48d9"}} />
                            {/* <Image style={styles.image} source={{uri: "https://img.freepik.com/free-vector/manicure-concept-icons-set_1284-18815.jpg?t=st=1704810304~exp=1704810904~hmac=e31b34f003168ec3792c7422a62095547fdc787dc8685f7cfb817da0ddd447ae"}} /> */}
                        </View>
                    </View>
                </View>
                <Button title={"Back to Shop"} buttonStyle={{backgroundColor: "#EC7632", width: "100%", borderRadius: 10, marginTop: 15}} titleStyle={{fontSize: 16, fontFamily: "Rubik_600SemiBold"}} onPress={() => navigation.navigate("ShopOverview", {name: shopName, shopId: shopId, serviceCategory: serviceCategory, farness: farness, star: star, reviewNo: reviewNo})}></Button>
            </ScrollView>  
        </IconContext.Provider>
        );
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
    categoryFarnessText: {
        fontSize: 12,
        fontWeight: "400",
        marginBottom: 5
    },
    section: {
        marginVertical: 8
    },
    infoText: {
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        columnGap: 5
    },
    headerText: {
        fontSize: 18,
        fontWeight: "700",
        marginVertical: 4
    },
    map: {
        height: 100,
        width: "100%",
        alignSelf: "center",
        borderRadius: 15
    },
    galleryContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 0,
        margin: 0,
    },
    gallery: {
        width: 300,
        height: 300,
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        rowGap: 5,
        padding: 5,
    },
    image : {
        width: 300,
        height: 300,
        maxHeight: "32%",
        marginRight: "1%",
        maxWidth: "32%",
        resizeMode: "cover",
        borderRadius: 15
    },
    text: {
        fontFamily: "Rubik_400Regular",
        fontSize: 16
    }
})