import {
  View,
  Text,
  TouchableWithoutFeedback,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { ManageBookingStyles, iconColor } from "./ManageBookingStyles";
import { MapPin, Note, Percent, Seal, Star, Tag } from "phosphor-react-native";
import { useState } from "react";
import MapView from "react-native-maps";
import { ScrollView } from "react-native";

export default function PastBooking({ booking, navigation }) {
  const RateThis = () => {
    const [rating, setRating] = useState(0);

    return (
      <View
        className="p-4 rounded-lg"
        style={ManageBookingStyles.subBackgroundColor}
      >
        <Text>Rates this service</Text>
        <View className="pt-2 flex flex-row justify-between">
          {Array.from({ length: 5 }, (v, k) => k + 1).map((i) => {
            return (
              <TouchableWithoutFeedback
                onPress={() => {
                  setRating(i);
                }}
                key={i}
              >
                <View>
                  <Star
                    weight={i > rating ? "light" : "fill"}
                    size={50}
                    color={iconColor}
                  />
                </View>
              </TouchableWithoutFeedback>
            );
          })}
        </View>
        {rating > 0 ? (
          <View className="pt-4 flex flex-col gap-4">
            <TextInput
              placeholder="Share more about experience to help others"
              className="rounded-lg border-slate-400 border text-base px-2 pb-5"
              style={ManageBookingStyles.backgroundColor}
              multiline={true}
            />
            <TouchableOpacity>
              <View
                className="rounded-lg p-3"
                style={ManageBookingStyles.primaryBackgroundColor}
              >
                <Text className="text-white font-bold text-xl text-center">
                  Rate this service
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        ) : null}
      </View>
    );
  };

  return (
    <ScrollView
      className="flex-1 p-4"
      style={ManageBookingStyles.backgroundColor}
    >
      <View className="flex flex-row py-4 gap-x-5">
        <TouchableOpacity
          onPress={() => {
            navigation.goBack(null);
          }}
        >
          <Text className="text-2xl" style={ManageBookingStyles.primaryColor}>
            &#8592;
          </Text>
        </TouchableOpacity>
        <Text className="font-bold text-2xl text-center">
          25/1/24 10:00 - 11:00
        </Text>
      </View>

      <RateThis />

      <View
        className="flex flex-col gap-y-2 py-2"
        style={{ padding: 0, margin: 0 }}
      >
        <View className="flex flex-row gap-2">
          <Seal weight="fill" color={iconColor} size={15} />
          <Text>Manicure and hand spa</Text>
        </View>
        <View className="flex flex-row gap-2">
          <MapPin weight="fill" color={iconColor} size={15} />
          <Text>Ooh La La Nails</Text>
        </View>
        <View className="flex flex-row gap-2">
          <Tag weight="fill" color={iconColor} size={15} />
          <Text>$ 150</Text>
        </View>

        <View className="flex flex-row gap-2">
          <Percent weight="fill" color={iconColor} size={15} />
          <Text>Save 15%</Text>
        </View>

        <View className="flex flex-row gap-2">
          <Note weight="fill" color={iconColor} size={15} />
          <Text className="text-wrap flex-1">
            remark Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Praesent bibendum nulla nibh, ut molestie augue elementum sed.
            Mauris massa nisi, porttitor non enim eu, sagittis volutpat neque.
            Aliquam hendrerit vehicula lorem eget dignissim.
          </Text>
        </View>

        <View className="flex flex-row gap-2">
          <MapPin weight="fill" color={iconColor} size={15} />
          <View className="flex flex-col flex-1">
            <Text>
              Tak Woo House, 1 Wo On Lane. , 9Floor, Hong Kong, Hong Kong
            </Text>
            <Text style={ManageBookingStyles.primaryColor}>Get direction</Text>
            <MapView
              className="w-full h-[100]"
              customMapStyle={{ borderRadius: 15 }}
              // onRegionChange={onRegionChange}
              initialRegion={{
                latitude: 22.286934914936843,
                longitude: 114.154166824391,
                latitudeDelta: 0.5,
                longitudeDelta: 0,
              }}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
