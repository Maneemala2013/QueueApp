/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import { Text, View, ScrollView, TouchableOpacity } from "react-native";
import { ManageBookingStyles, iconColor } from "./ManageBookingStyles";
import { MapPin, Seal } from "phosphor-react-native";

function BookingCard({ booking, navigation, type }) {
  return (
    <TouchableOpacity
      key={booking.id}
      className="py-4 border-b border-slate-300"
      onPress={() => {
        if (type === "Past")
          navigation.navigate("PastBooking", {
            booking: booking,
          });
        else if (type === "Upcoming")
          navigation.navigate("UpcomingBooking", {
            booking: booking,
          });
      }}
    >
      <View className="flex flex-col space-y-2">
        <View className="flex flex-row justify-between">
          <Text className="text-base">
            {booking.date} {booking.time}
          </Text>
          <Text style={ManageBookingStyles.primaryColor} className="text-base">
            &#8594;
          </Text>
        </View>
        <View className="flex flex-row space-x-2">
          <Seal weight="fill" color={iconColor} size={15} />
          <Text>{booking.type}</Text>
        </View>

        <View className="flex flex-row space-x-2">
          <MapPin weight="fill" color={iconColor} size={15} />
          <Text>{booking.location}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

function UpcomingBookingList({
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
          return (
            <BookingCard
              booking={b}
              key={b.id}
              navigation={navigation}
              type="Upcoming"
            />
          );
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
function PastBookingList({
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
          return (
            <BookingCard
              booking={b}
              key={b.id}
              navigation={navigation}
              type="Past"
            />
          );
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

function SelectBookingsType({ bookingsType, setBookingsType }) {
  const wrapperRef = useRef(null);
  const [position, setPosition] = useState(0);
  const [wrapperWidth, setWrapperWidth] = useState(0);

  return (
    <TouchableOpacity
      onPress={() => {
        if (bookingsType === "Past") {
          setBookingsType("Upcoming");
          setPosition(0);
        } else {
          setBookingsType("Past");
          setPosition(wrapperWidth / 2);
        }
      }}
    >
      <View
        className="border border-slate-300 flex-row flex rounded-lg"
        ref={wrapperRef}
        onLayout={(event) => {
          const { width } = event.nativeEvent.layout;
          setWrapperWidth(width);
        }}
      >
        <View
          className="h-full w-1/2 absolute p-1"
          style={{
            left: position,
            transition: "left 1s ease-in-out",
          }}
        >
          <View
            className="rounded h-full w-full"
            style={ManageBookingStyles.primaryBackgroundColor}
          ></View>
        </View>
        <View className="flex-1 py-3">
          <Text
            className="text-center"
            style={{
              color: bookingsType === "Upcoming" ? "white" : "black",
            }}
          >
            Upcoming bookings
          </Text>
        </View>
        <View className="flex-1 py-3">
          <Text
            className="text-center"
            style={{
              color: bookingsType === "Past" ? "white" : "black",
            }}
          >
            Past bookings
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default function Booking({ navigation }) {
  const [bookingsList, setBookingsList] = useState([]);
  const [bookingsType, setBookingsType] = useState("Upcoming"); // ["Upcoming", "Past"
  const [loaded, setLoaded] = useState(false);
  // console.log(bookingsList);

  return (
    <View className="p-4" style={ManageBookingStyles.backgroundColor}>
      <Text className="text-2xl font-bold py-4">Bookings</Text>
      <SelectBookingsType
        bookingsType={bookingsType}
        setBookingsType={setBookingsType}
      />
      {bookingsType === "Upcoming" ? (
        <UpcomingBookingList
          setBookingsList={setBookingsList}
          bookingsList={bookingsList}
          loaded={loaded}
          setLoaded={setLoaded}
          navigation={navigation}
        />
      ) : (
        <PastBookingList
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
