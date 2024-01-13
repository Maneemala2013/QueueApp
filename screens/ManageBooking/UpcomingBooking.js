import { Text, View, Button } from "react-native";

export default function UpcomingBooking({ booking }) {
  return (
    <View>
      <View>
        <Text>&#8592;</Text>
        <Text>25/1/24 10:00 - 11:00</Text>
      </View>

      <View>
        <Text>Head, neck, shoulder spa</Text>
        <Text>Chuan Spa & Massage</Text>
        <Text>150</Text>
      </View>

      <View>
        <Text>Show this code to get the service</Text>
        <View>
          <Text>14ER8Q</Text>
        </View>
      </View>

      <View>
        <Text>Tak Woo House, 1 Wo On Lane, 9Floor, Hong Kong, Hong Kong</Text>
        {/* TODO navigate to Google map  */}
        <Text>Get Direction</Text>
        <Text>{/* TODO Google Map */}</Text>
      </View>

      <View>
        <Button title="Cancel Booking" />
        <Button title="Back to Booking" />
      </View>
    </View>
  );
}
