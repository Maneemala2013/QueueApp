// Ref: https://reactnativeelements.com/docs/components/searchbar

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SearchBar, Button } from "@rneui/themed";
import Ionicons from "react-native-vector-icons/Ionicons";
import CategoryCard from "../components/CategoryCard.js";
import ShopNearYouCard from "../components/ShopNearYouCard.js";
import { IconContext, Info, Seal, MapPin } from "phosphor-react-native";

import {
  useFonts,
  Rubik_400Regular,
  Rubik_600SemiBold,
  Rubik_800ExtraBold,
  Rubik_900Black,
} from "@expo-google-fonts/rubik";

export default function Home({ navigation }) {
  const [search, setSearch] = useState("");
  const updateSearch = (search) => {
    setSearch(search);
  };

  const [shopData, setShopData] = useState([])
  function getShopData() {
    // http://<IP_ADDRESS>:<IP_ADDRESS>/path/
		fetch("http://127.0.0.1:8000/shop/", {
		  method: "GET",
		  headers: {
		    "Content-Type": "application/json",
		  },
		  // body: JSON.stringify(shop),
		})
		  .then((resp) => resp.json())
		  .then((shop) => {
        // console.log(shop.data)
        tmp = shop.data
        a = []
        tmp.map((s) => {
          b = s.attributes
          b['id'] = s.id
          a.push(b)
        })
        setShopData(a)
		    console.log(shopData);
		  }).catch(error => {console.log(error)});
  }

  let [fontsLoaded] = useFonts({
    Rubik_400Regular,
    Rubik_600SemiBold,
    Rubik_800ExtraBold,
    Rubik_900Black,
  });
  
  useEffect(() => {
    getShopData();
  }, [])

  if (!fontsLoaded) {
    return <ScrollView style={styles.container}></ScrollView>;
  } else {
    return (
      <IconContext.Provider
        value={{
          color: "#938FC7",
          size: 18,
          weight: "fill",
        }}
      >
        <ScrollView style={styles.container}>
          <View style={styles.searchAndFilter}>
            <SearchBar
              containerStyle={styles.search}
              placeholder="Search..."
              onChangeText={updateSearch}
              lightTheme={true}
              platform="ios"
              value={search}
            />
            <View style={styles.filter}>
              <Button
                radius={"md"}
                type="solid"
                buttonStyle={{ backgroundColor: "#c3cbd9" }}
              >
                <Ionicons name="filter" size={25} />
              </Button>
            </View>
          </View>
          <View style={styles.noti}>
            <Text
              style={{
                fontSize: 16,
                color: "black",
                fontFamily: "Rubik_600SemiBold",
              }}
            >
              You have 1 booking today
            </Text>
            <View style={styles.infoText}>
              <Info />
              <Text style={styles.regularText}>
                {"\t"}Mon - Thu 10:00 - 20:00
              </Text>
            </View>
            <View style={styles.infoText}>
              <Seal />
              <Text style={styles.regularText}>
                {"\t"}Manicure and hand spa
              </Text>
            </View>
            <View style={styles.infoText}>
              <MapPin />
              <Text style={styles.regularText}>{"\t"}Oh La La Nails</Text>
            </View>
          </View>
          <View style={styles.category}>
            <CategoryCard
              categoryName={"BEAUTY"}
              imageUri={
                "https://img.freepik.com/free-photo/beautiful-face-young-adult-asian-woman-with-clean-fresh-skin-isolated-white_658552-145.jpg?w=900&t=st=1704637200~exp=1704637800~hmac=75088b1ef3b44d2b461a32c6c441f942dc5f8dc0910ca613ece4ab27ce2b990d"
              }
            />
            <CategoryCard
              categoryName={"SPA & MASSAGE"}
              imageUri={
                "https://img.freepik.com/free-photo/beauty-spa_144627-46177.jpg?w=900&t=st=1704638730~exp=1704639330~hmac=403dffc8be9844b41fada6488763434e906d562b45e8114f66cd35d79b5cf6d0"
              }
            />
            <CategoryCard
              categoryName={"CLINIC"}
              imageUri={
                "https://img.freepik.com/free-photo/room-with-equipment-clinic-dermatology-cosmetology_157027-3267.jpg?t=st=1704615813~exp=1704619413~hmac=539834df62a390c1e706c8fe96cc5efd47c89fe0ef42ba2f1a8bb11ba50d5de0&w=1060"
              }
            />
            <CategoryCard
              categoryName={"ALTERNATIVE THERAPY"}
              imageUri={
                "https://img.freepik.com/free-photo/hands-held-hearts-touched-love-shared-outdoors-generated-by-ai_188544-10801.jpg?t=st=1704640985~exp=1704644585~hmac=d5ae1d5ecf632a7571c1bb61375a239f15f6c903c12a4c3d634d0c6b335996ca&w=1060"
              }
            />
          </View>
          <View style={styles.shopNearYou}>
            <Text style={styles.headerText}>Shops near you</Text>
            {shopData.map((data, idx) => {
                return (
                    <ShopNearYouCard key={idx} 
                    navigation={navigation}
                    shopId={data.id}
                    shopName={data.shop_name}
                    serviceCategory={data.category}
                    farness={data.farness}
                    priceRange={data.price_range}
                    star={data.rating}
                    reviewNo={data.review_num}
                    imageUri={data.profile_image_url}
                    />
                );
            })}
            {/* <ShopNearYouCard
              navigation={navigation}
              shopName={"Oh La La Nails"}
              serviceCategory={"nail"}
              farness={"2km"}
              priceRange={"$ - $$"}
              star={4.3}
              reviewNo={5}
              imageUri={
                "https://img.freepik.com/free-photo/still-life-assortment-nail-care-products_23-2148974547.jpg?w=900&t=st=1704687221~exp=1704687821~hmac=c5dcc80e0a8acc5f25e82745129978459fba066ec18a1ec85ced87f7b379999b"
              }
            />
            <ShopNearYouCard
              navigation={navigation}
              shopName={"Perfect Nail"}
              serviceCategory={"nail"}
              farness={"5km"}
              priceRange={"$$ - $$$"}
              star={4.2}
              reviewNo={120}
              imageUri={
                "https://img.freepik.com/free-photo/nail-tech-filing-nails-with-nail-file-professional-manicure-tools_176420-11581.jpg?w=900&t=st=1704686824~exp=1704687424~hmac=dd1e18cc6084d35fb9b7cff98b818c94f7a629d4df9cf49ea754592bd68f2630"
              }
            />
            <ShopNearYouCard
              navigation={navigation}
              shopName={"Thai Spa"}
              serviceCategory={"massage"}
              farness={"5km"}
              priceRange={"$ - $$"}
              star={4}
              reviewNo={0}
              imageUri={
                "https://img.freepik.com/free-photo/young-beautiful-woman-relaxing-during-spa-treatment_1150-3094.jpg?w=900&t=st=1704686772~exp=1704687372~hmac=9e35dffc081792a430ffd25b96da085e53e521cfbeb139adf7aa95a43f681e1d"
              }
            /> */}
          </View>
        </ScrollView>
      </IconContext.Provider>
    );
  }
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
    alignContent: "center",
  },
  noti: {
    marginHorizontal: "4%",
    padding: 15,
    marginBottom: 10,
    alignItems: "flex-start",
    justifyContent: "center",
    borderRadius: 8,
    backgroundColor: "rgba(243, 187, 154, 0.4)",
  },
  infoText: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  category: {
    height: "auto",
    marginBottom: 5,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    columnGap: 10,
  },
  shadowProp: {
    shadowOffset: { width: 3, height: 3 },
    shadowColor: "black",
    shadowOpacity: 0.3,
    elevation: 5,
  },
  categoryName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  card: {
    width: "45%",
    height: 120,
    marginBottom: 25,
    borderRadius: 15,
    backgroundColor: "#FFFFFF",
    justifyContent: "flex-start",
  },
  image: {
    width: "100%",
    height: "80%",
  },
  textContainer: {
    alignItems: "center",
    justifyContent: "flex-start",
  },
  text: {
    fontWeight: "bold",
    fontSize: 12,
    textAlign: "center",
    textAlignVertical: "top",
  },
  shopNearYou: {
    marginHorizontal: "4%",
  },
  headerText: {
    fontSize: 18,
    marginVertical: 4,
    fontFamily: "Rubik_600SemiBold",
    color: "#4A4444",
  },
  regularText: {
    fontFamily: "Rubik_400Regular",
    fontSize: 14,
  },
});
