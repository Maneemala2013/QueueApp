import { StyleSheet } from "react-native";

export const primaryColor = "#ec7632";
const backgroundColor = "white";
const subBackgroundColor = "#EBEBEB";

export const ManageBookingStyles = StyleSheet.create({
  primaryColor: {
    color: primaryColor,
  },
  primaryBackgroundColor: {
    backgroundColor: primaryColor,
  },
  backgroundColor: {
    backgroundColor: backgroundColor,
  },
  subBackgroundColor: {
    backgroundColor: subBackgroundColor,
  },

  borderButton: {
    borderWidth: 1,
    borderColor: primaryColor,
    borderRadius: 10,
  },

  redButton: {
    backgroundColor: "#D20A0A",
    borderRadius: 10,
  },
});

export const iconColor = "#938FC7";
