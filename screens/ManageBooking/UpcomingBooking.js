import { Text, View, ScrollView } from "react-native";
import { ManageBookingStyles, iconColor } from "./ManageBookingStyles";
import { TouchableOpacity } from "react-native";
import { MapPin, Seal, Tag } from "phosphor-react-native";
import MapView from "react-native-maps";

export default function UpcomingBooking({ booking, navigation }) {
  return (
    <ScrollView
      className="p-5 flex-1 flex flex-col space-y-4"
      style={ManageBookingStyles.backgroundColor}
    >
      <View className="flex flex-row">
        <TouchableOpacity
          onPress={() => {
            navigation.goBack(null);
          }}
        >
          <Text
            className="text-2xl mr-4"
            style={ManageBookingStyles.primaryColor}
          >
            &#8592;
          </Text>
        </TouchableOpacity>
        <Text className="font-bold text-2xl text-center">
          25/1/24 10:00 - 11:00
        </Text>
      </View>

      <View className="flex flex-col space-y-2">
        <View className="flex flex-row gap-2">
          <Seal weight="fill" color={iconColor} size={15} />
          <Text>Manicure and hand spa</Text>
        </View>
        <View className="flex flex-row gap-2">
          <MapPin weight="fill" color={iconColor} size={15} />
          <Text className="flex-1">
            Chuan Spa & Massage Hong Kong 「川」水療中心
          </Text>
        </View>
        <View className="flex flex-row gap-2">
          <Tag weight="fill" color={iconColor} size={15} />
          <Text>$ 150</Text>
        </View>
      </View>

      <View
        className="rounded-lg p-2"
        style={ManageBookingStyles.subBackgroundColor}
      >
        <Text>Show this code to get the service</Text>
        <View className="pt-4 pb-2">
          <Text
            className="font-bold tracking-[15] text-4xl text-center"
            style={ManageBookingStyles.primaryColor}
          >
            14ER8Q
          </Text>
        </View>
      </View>

      <View className="flex flex-row gap-2">
        <MapPin weight="fill" color={iconColor} size={15} />
        <View className="flex flex-col flex-1">
          <Text>
            Tak Woo House, 1 Wo On Lane. , 9Floor, Hong Kong, Hong Kong
          </Text>
          <Text style={ManageBookingStyles.primaryColor} className="py-2">
            Get direction
          </Text>
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
      <View className="flex flex-col gap-4">
        <TouchableOpacity
          className="py-4"
          style={ManageBookingStyles.redButton}
        >
          <Text className="text-center font-bold text-white">
            Cancel bookings
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="py-4"
          style={ManageBookingStyles.borderButton}
          onPress={() => {
            navigation.goBack("Booking");
          }}
        >
          <Text className="text-center font-bold">Back to Bookings</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
