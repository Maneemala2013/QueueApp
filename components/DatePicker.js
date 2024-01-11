import React, { useState, useEffect } from "react";
import { Alert, StyleSheet, View, Text } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

import { Button } from "@rneui/themed";
// import Dialog from "react-native-dialog";
// import {useAnswer, AnswerProvider} from "../contexts/AnswerContext"
import { Platform } from "react-native";
import moment from "moment";
import "moment/locale/zh-hk";
moment.locale("zh-hk");

const DatePicker = () => {
	const [date, setDate] = useState(new Date());
	// const [mode, setMode] = useState("date");
	// const [show, setShow] = useState(false);

	const onChange = (event, selectedDate) => {
		setVisible(false);
		if (event.type == "set") {
			//ok button clicked
			const currentDate = selectedDate;
			//save local Time
			setDate(currentDate);
		}
		// } else {
		// 	//cancel button clicked
		// }
	};

	// const showMode = (currentMode) => {
	// 	setMode(currentMode);
	// };

	// const showTimepicker = () => {
	// 	showMode("time");
	// };

	const [visible, setVisible] = useState(false);

	const showDialog = () => {
		setVisible(true);
		// showMode("time");
	};

	const display = (
		<DateTimePicker
						testID="dateTimePicker"
						value={date}
						mode={"date"}
						is24Hour={true}
						onChange={onChange}
					/>
	);
	// {newValue, display}
	return display;
};

const styles = StyleSheet.create({
	button: {
		borderRadius: 100,
		maxWidth: 100,
		backgroundColor: "#212d4a",
		marginLeft: 5,
		alignSelf: "right",
	},
	dialog: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
	inputRow: {
		flexDirection: "row",
		alignItems: "center",
		alignContent: "center",
		justifyContent: "space-between",
	},
});
export default DatePicker;
