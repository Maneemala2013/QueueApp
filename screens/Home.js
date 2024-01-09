// Ref: https://reactnativeelements.com/docs/components/searchbar

import { StyleSheet, Text, View, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import React, { useState } from 'react';
import { SearchBar, Button } from '@rneui/themed';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CategoryCard from '../components/CategoryCard.js';
import ShopNearYouCard from '../components/ShopNearYouCard.js';

export default function Home({navigation}) {
    const [search, setSearch] = useState("");
    const updateSearch = (search) => {
    setSearch(search);
    };

    return (
      <ScrollView style={styles.container}>
        <View style={styles.searchAndFilter}>
            <SearchBar containerStyle={styles.search}
            placeholder="Search..."
            onChangeText={updateSearch}
            lightTheme={true}
            platform='ios'
            value={search}
            />
            <View style={styles.filter}>
            <Button radius={"md"} type="solid" buttonStyle={{backgroundColor: "#c3cbd9"}}>
                <Ionicons name="filter" size={25}/>
            </Button>
            </View>
        </View>
        <View style={styles.noti}>
            <Text style={{fontSize: 16, fontWeight: 500, color: "black"}}>You have 1 booking today</Text>
            <View style={styles.infoText}>
                <Ionicons name='time' size={25} color={"purple"}/>
                <Text>{'\t'}Mon - Thu 10:00 - 20:00</Text>
            </View>
            <View style={styles.infoText}>
                <Ionicons name='information' size={25} color={"purple"}/>
                <Text>{'\t'}Manicure and hand spa</Text>
            </View>
            <View style={styles.infoText}>
                <Ionicons name='location' size={25} color={"purple"}/>
                <Text>{'\t'}Oh La La Nails</Text>
            </View>
        </View>
        <View style={styles.category} >
            <CategoryCard categoryName={"BEAUTY"} imageUri={"https://img.freepik.com/free-photo/beautiful-face-young-adult-asian-woman-with-clean-fresh-skin-isolated-white_658552-145.jpg?w=900&t=st=1704637200~exp=1704637800~hmac=75088b1ef3b44d2b461a32c6c441f942dc5f8dc0910ca613ece4ab27ce2b990d"}/>
            <CategoryCard categoryName={"SPA & MASSAGE"} imageUri={"https://img.freepik.com/free-photo/beauty-spa_144627-46177.jpg?w=900&t=st=1704638730~exp=1704639330~hmac=403dffc8be9844b41fada6488763434e906d562b45e8114f66cd35d79b5cf6d0"}/>
            <CategoryCard categoryName={"CLINIC"} imageUri={"https://img.freepik.com/free-photo/room-with-equipment-clinic-dermatology-cosmetology_157027-3267.jpg?t=st=1704615813~exp=1704619413~hmac=539834df62a390c1e706c8fe96cc5efd47c89fe0ef42ba2f1a8bb11ba50d5de0&w=1060"}/>
            <CategoryCard categoryName={"ALTERNATIVE THERAPY"} imageUri={"https://img.freepik.com/free-photo/hands-held-hearts-touched-love-shared-outdoors-generated-by-ai_188544-10801.jpg?t=st=1704640985~exp=1704644585~hmac=d5ae1d5ecf632a7571c1bb61375a239f15f6c903c12a4c3d634d0c6b335996ca&w=1060"}/>
        </View>
        <View style={styles.shopNearYou}>
            <Text>Shop Near You</Text>
            <ShopNearYouCard navigation={navigation} shopName={"Oh La La Nails"} serviceCategory={"nail"} farness={"2km"} priceRange={"$ - $$"} star={4.3} reviewNo={5} imageUri={"https://img.freepik.com/free-photo/still-life-assortment-nail-care-products_23-2148974547.jpg?w=900&t=st=1704687221~exp=1704687821~hmac=c5dcc80e0a8acc5f25e82745129978459fba066ec18a1ec85ced87f7b379999b"}/>
            <ShopNearYouCard navigation={navigation} shopName={"Perfect Nail"} serviceCategory={"nail"} farness={"5km"} priceRange={"$$ - $$$"} star={4.2} reviewNo={120} imageUri={"https://img.freepik.com/free-photo/nail-tech-filing-nails-with-nail-file-professional-manicure-tools_176420-11581.jpg?w=900&t=st=1704686824~exp=1704687424~hmac=dd1e18cc6084d35fb9b7cff98b818c94f7a629d4df9cf49ea754592bd68f2630"}/>
            <ShopNearYouCard navigation={navigation} shopName={"Thai Spa"} serviceCategory={"massage"} farness={"5km"} priceRange={"$ - $$"} star={4} reviewNo={0} imageUri={"https://img.freepik.com/free-photo/young-beautiful-woman-relaxing-during-spa-treatment_1150-3094.jpg?w=900&t=st=1704686772~exp=1704687372~hmac=9e35dffc081792a430ffd25b96da085e53e521cfbeb139adf7aa95a43f681e1d"}/>
        </View>
      </ScrollView>
    );
  }

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    searchAndFilter: {
        flexDirection: "row",
        marginHorizontal: "2%",
        marginBottom: 10,
        alignContent: "center",
        justifyContent: "center",
    },
    search: {
        width: "80%",
        backgroundColor: "transparent",
    },
    filter: {
        width: "14%",
        marginLeft: "2%",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center"
    },
    noti: {
        marginHorizontal: "4%",
        padding: 15,
        marginBottom: 10,
        alignItems: "flex-start",
        justifyContent: "center",
        borderRadius: 8,
        backgroundColor: "rgba(250, 161, 102, 0.4)",
    },
    infoText: {
        flexDirection: "row",
        alignItems: "center",
    },
    category: {
        height: "auto",
        marginBottom: 5,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: "center",
        alignContent:"center",
        columnGap: 10
    },
    shadowProp: {
        shadowOffset: { width: 3, height: 3 },
        shadowColor: 'black',
        shadowOpacity: 0.3,
        elevation: 5,
    },
    categoryName: {
        fontSize: 18,
        fontWeight: "bold"
    },
    card : {
        width : '45%',
        height: 120,
        marginBottom : 25,
        borderRadius : 15,
        backgroundColor : '#FFFFFF',
        justifyContent: "flex-start"
    },
    image : {
        width : '100%',
        height : '80%'
    },
    textContainer : {
        alignItems : 'center',
        justifyContent: "flex-start"
    },
    text : {
        fontWeight : 'bold',
        fontSize : 12,
        textAlign: "center",
        textAlignVertical: "top",
    },
    shopNearYou: {
        marginHorizontal: "4%"
    }
    }
)