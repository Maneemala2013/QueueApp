/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Text, View, ScrollView, TouchableOpacity } from "react-native";

function BookingCard({ booking, navigation }) {
  return (
    <TouchableOpacity
      key={booking.id}
      className="py-2 border-b border-slate-400"
      onPress={() => {
        navigation.navigate("UpcomingBooking", {
          booking: booking,
        });
      }}
    >
      <View>
        <Text>
          <View className="flex flex-row justify-between py-2">
            <Text>
              {booking.date} {booking.time}
            </Text>
            <Text>&#8594;</Text>
          </View>
        </Text>
        <Text>{booking.type}</Text>
        <Text>{booking.location}</Text>
      </View>
    </TouchableOpacity>
  );
}

function UpcomingBooking({
  setBookingsList,
  loaded,
  setLoaded,
  bookingsList,
  navigation,
}) {
  useEffect(() => {
    async function fetchBookings() {
      const data = [];
      for (let i = 0; i < 20; i++) {
        data.push({
          id: i,
          date: "20/1/24",
          time: "10:00 - 11:00",
          type: "Manicure and hand spa",
          location: "Ooh La La Nail",
        });
      }

      setBookingsList(data);
      setLoaded(true);
    }

    fetchBookings();
  }, []);

  if (loaded) {
    return (
      <ScrollView>
        {bookingsList.map((b) => {
          return <BookingCard booking={b} key={b.id} navigation={navigation} />;
        })}
      </ScrollView>
    );
  } else
    return (
      <View>
        <Text>loading</Text>
      </View>
    );
}

// TODO: change fetching data in PastBooking
function PastBooking({
  setBookingsList,
  loaded,
  setLoaded,
  bookingsList,
  navigation,
}) {
  useEffect(() => {
    async function fetchBookings() {
      const data = [];
      for (let i = 0; i < 20; i++) {
        data.push({
          id: i,
          date: "20/1/24",
          time: "10:00 - 11:00",
          type: "Manicure and hand spa",
          location: "Ooh La La Nail",
        });
      }

      setBookingsList(data);
      setLoaded(true);
    }

    fetchBookings();
  }, []);

  if (loaded) {
    return (
      <ScrollView>
        {bookingsList.map((b) => {
          return <BookingCard booking={b} key={b.id} navigation={navigation} />;
        })}
      </ScrollView>
    );
  } else
    return (
      <View>
        <Text>loading</Text>
      </View>
    );
}

export default function Booking({ navigation }) {
  const [bookingsList, setBookingsList] = useState([]);
  const [bookingsType, setBookingsType] = useState("Upcoming"); // ["Upcoming", "Past"
  const [loaded, setLoaded] = useState(false);
  // console.log(bookingsList);

  const SelectBookingsType = () => {
    return (
      <View
        onPress={() => {
          if (bookingsType === "Past") setBookingsType("Upcoming");
          else setBookingsType("Past");
        }}
      >
        <Text>Upcoming bookings/ Past bookings</Text>
      </View>
    );
  };
  return (
    <View className="p-4">
      <Text className="text-2xl font-bold py-4">Bookings</Text>
      <SelectBookingsType />
      {bookingsType === "Upcoming" ? (
        <UpcomingBooking
          setBookingsList={setBookingsList}
          bookingsList={bookingsList}
          loaded={loaded}
          setLoaded={setLoaded}
          navigation={navigation}
        />
      ) : (
        <PastBooking
          setBookingsList={setBookingsList}
          bookingsList={bookingsList}
          loaded={loaded}
          setLoaded={setLoaded}
          navigation={navigation}
        />
      )}
    </View>
  );
}
