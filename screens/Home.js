// Ref: https://reactnativeelements.com/docs/components/searchbar

import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { SearchBar, Button, Card, Image } from '@rneui/themed';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Home() {
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
            value={search}
            />
            <View style={styles.filter}>
            <Button radius={"sm"} type="solid" buttonStyle={{backgroundColor: "#c3cbd9"}}>
                <Ionicons name="filter" size={30}/>
            </Button>
            </View>
        </View>
        <View style={styles.noti}>
            <Text style={{fontSize: 18, fontWeight: 600, color: "white"}}><Ionicons name="calendar-outline" size={22} color={"white"} /> You have 1 booking today</Text>
        </View>
        <View style={styles.category} >
            <TouchableOpacity style={styles.card} onPress={()=>{console.log("Beauty is chosen")}}>
                <Image style={styles.image} source={{uri: "https://img.freepik.com/free-photo/beautiful-face-young-adult-asian-woman-with-clean-fresh-skin-isolated-white_658552-145.jpg?w=900&t=st=1704637200~exp=1704637800~hmac=75088b1ef3b44d2b461a32c6c441f942dc5f8dc0910ca613ece4ab27ce2b990d" }} />
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        BEAUTY
                    </Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.card} onPress={()=>{console.log("Spa & Message is chosen")}}>
                <Image style={styles.image} source={{uri: "https://img.freepik.com/free-photo/beauty-spa_144627-46177.jpg?w=900&t=st=1704638730~exp=1704639330~hmac=403dffc8be9844b41fada6488763434e906d562b45e8114f66cd35d79b5cf6d0" }} />
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        SPA & MASSAGE
                    </Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.card} onPress={()=>{console.log("Clinic is chosen")}}>
                <Image style={styles.image} source={{uri: "https://img.freepik.com/free-photo/room-with-equipment-clinic-dermatology-cosmetology_157027-3267.jpg?t=st=1704615813~exp=1704619413~hmac=539834df62a390c1e706c8fe96cc5efd47c89fe0ef42ba2f1a8bb11ba50d5de0&w=1060" }} />
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        CLINIC
                    </Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.card} onPress={()=>{console.log("Alternative Therapy is chosen")}}>
                <Image style={styles.image} source={{uri: "https://img.freepik.com/free-photo/hands-held-hearts-touched-love-shared-outdoors-generated-by-ai_188544-10801.jpg?t=st=1704640985~exp=1704644585~hmac=d5ae1d5ecf632a7571c1bb61375a239f15f6c903c12a4c3d634d0c6b335996ca&w=1060" }} />
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        ALTERNATIVE THERAPY
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
        <View style={styles.shopNearYou}>
            <Text>Shop Near You</Text>
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
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8,
        backgroundColor: "rgba(0, 0, 0, 0.35)"
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