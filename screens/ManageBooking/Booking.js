/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import { Text, View, ScrollView, TouchableOpacity } from "react-native";
import { ManageBookingStyles, iconColor } from "./ManageBookingStyles";
import { MapPin, Seal } from "phosphor-react-native";
import { BACKEND, USER_ID } from "../../demoConfig";
import { useFocusEffect } from "@react-navigation/native";

function BookingCard({ booking, navigation, type }) {
  console.log("card", booking);
  console.log("id", booking.id);

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
            {booking.date} {booking.start_time} - {booking.end_time}
          </Text>
          <Text style={ManageBookingStyles.primaryColor} className="text-base">
            &#8594;
          </Text>
        </View>
        <View className="flex flex-row space-x-2">
          <Seal weight="fill" color={iconColor} size={15} />
          <Text>{booking.service_name}</Text>
        </View>

        <View className="flex flex-row space-x-2">
          <MapPin weight="fill" color={iconColor} size={15} />
          <Text>{booking.location}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

function UpcomingBookingList({ loaded, bookingsList, navigation }) {
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

async function fetchBookings() {
  // TODO: handle assumption: end date and start date might not be the same
  const bookings = [];

  return await fetch(`${BACKEND}/user/${USER_ID}`)
    .then((res) => res.json())
    .then(async (res) => {
      const appointmentList = res.data.relationships.appointment_set.data;

      async function fetchShopName(id) {
        return await fetch(`${BACKEND}/shop/${id}`)
          .then((res) => res.json())
          .then((res) => {
            return {
              shop_name: res.data.attributes.shop_name,
              location: res.data.attributes.location,
              shop: res.data.attributes,
            };
          });
      }

      async function fetchAppointment(id) {
        return await fetch(`${BACKEND}/appointment/${id}`)
          .then((res) => res.json())
          .then(async (res) => {
            const { shop_name, location, shop } = await fetchShopName(
              res.data.relationships.shop.data.id
            );

            return {
              end_time: res.data.attributes.end_time,
              start_time: res.data.attributes.start_time,
              service_name: res.data.attributes.service_name,
              shop_name: shop_name,
              location: location,
              shop: shop,
              appointment: res.data.attributes,
              id: id,
            };
          });
      }

      for (const a of appointmentList) {
        const appointment = await fetchAppointment(a.id);
        bookings.push(appointment);
      }

      bookings.sort((a, b) => {
        return a.start_time - b.start_time;
      });
      return bookings;
    })
    .catch((err) => {
      console.log(err);
      return [];
    });
}

// TODO: change fetching data in PastBooking
function PastBookingList({ loaded, bookingsList, navigation }) {
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
  const [upcomingBookingsList, setUpcomingBookingsList] = useState([]);
  const [pastBookingsList, setPastBookingsList] = useState([]);
  const [bookingsType, setBookingsType] = useState("Upcoming"); // ["Upcoming", "Past"
  const [loaded, setLoaded] = useState(false);
  // console.log(bookingsList);

  useEffect(() => {
    async function load() {
      const bookings = await fetchBookings();

      const past = [];
      const upcoming = [];
      bookings.forEach((b) => {
        // if (b.end_time < Date.now()) past.push(b);
        // else upcoming.push(b);

        upcoming.push(b);
      });

      setUpcomingBookingsList(upcoming);
      setPastBookingsList(past);
      setLoaded(true);
    }

    load();
  }, []);

  return (
    <View className="p-4" style={ManageBookingStyles.backgroundColor}>
      <Text className="text-2xl font-bold py-4">Bookings</Text>
      <SelectBookingsType
        bookingsType={bookingsType}
        setBookingsType={setBookingsType}
      />
      {bookingsType === "Upcoming" ? (
        <UpcomingBookingList
          bookingsList={upcomingBookingsList}
          loaded={loaded}
          navigation={navigation}
        />
      ) : (
        <PastBookingList
          bookingsList={pastBookingsList}
          loaded={loaded}
          navigation={navigation}
        />
      )}
    </View>
  );
}
