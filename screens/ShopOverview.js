import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ItemOffer from '../components/ItemOffer.js';
import { Button } from '@rneui/themed';

const Stack = createNativeStackNavigator();

export default function ShopOverview({route, navigation}) {
    const shopName = route.params.name
    const serviceCategory = route.params.serviceCategory
    const farness = route.params.farness
    const star = route.params.star
    const reviewNo = route.params.reviewNo

    return(
        <ScrollView style={styles.container}>
            <View style={styles.sectionContainer}>
                <Text style={styles.categoryFarnessText}>{serviceCategory} - {farness} from you</Text>
                <View style={styles.rowContainer}>
                    <View style={styles.moreInfoText}>
                        <Ionicons name='information-circle' size={25} color={"purple"}/>
                        <Text>{'\t'}More info</Text>
                    </View>
                    <Button radius={"lg"} title="Book" type="clear" buttonStyle={{backgroundColor: "#ffffff", borderColor: "tomato", alignItems: "center"}} onPress={() => {navigation.navigate("MoreInfo", {name: `More Info - ${shopName}`})}}>
                        <Ionicons name='arrow-forward-sharp' size={25} color={"tomato"}/>
                    </Button>
                </View>
                <View style={styles.rowContainer}>
                    <View style={styles.moreInfoText}>
                        <Ionicons name='star' size={25} color={"purple"}/>
                        <Text>{'\t'}{star} {reviewNo != 0 ? `(${reviewNo} reviews)` : "(new shop!)" }</Text>
                    </View>
                    <Ionicons name='arrow-forward-sharp' size={25} color={"tomato"}/>
                </View>
            </View>
            <View style={styles.sectionContainer}>
                <Text style={styles.headerText}>Promotion</Text>
                <ItemOffer title="Hand and feet spa 2 for 1" time="1h 30m" discountedPrice={150} price={300} />
                <ItemOffer title="Manicure" time="1h 30m" discountedPrice={-1} price={150} />
            </View>
            <View style={styles.sectionContainer}>
                <Text style={styles.headerText}>Manicure</Text>
                <ItemOffer title="Signature Gel Manicure with Chrome Powder / Cat Eye" time="1h 30m" discountedPrice={-1} price={150} />
                <ItemOffer title="Manicure" time="1h 30m" discountedPrice={-1} price={150} />
            </View>
        </ScrollView>  
    )
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
    rowContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        margin: 5
    },
    moreInfoText: {
        flexDirection: "row",
        alignItems: "center",
    },
    headerText: {
        fontSize: 18,
        fontWeight: "700",
        marginVertical: 4
    }
})