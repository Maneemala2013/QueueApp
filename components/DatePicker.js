import React, { useState } from "react";
import { View } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

import { Button } from "@rneui/themed";
// import Dialog from "react-native-dialog";
// import {useAnswer, AnswerProvider} from "../contexts/AnswerContext"
import { Platform } from "react-native";
import moment from "moment";
import "moment/locale/zh-hk";
moment.locale("zh-hk");

const DatePicker = ({setMyDate}) => {
	const [date, setDate] = useState(new Date());
	const [visible, setVisible] = useState(false);

	const onChange = (event, selectedDate) => {
		setVisible(false);
		if (event.type == "set") {
			//ok button clicked
			const currentDate = selectedDate;
			//save local Time
			setDate(currentDate);
			console.log(currentDate.toLocaleDateString())
			setMyDate(currentDate.toLocaleDateString('zh-hk'))
		}
		// } else {
		// 	//cancel button clicked
		// }
	};

	const showDialog = () => {
		setVisible(true);
		// showMode("time");
	};

	const options = {
		weekday: "short",
		year: "numeric",
		month: "short",
		day: "numeric",
	  };

	// {newValue, display}
	return (<View>
	<Button onPress={showDialog} title={date.toLocaleDateString('zh-hk', options)} buttonStyle={{backgroundColor: "#E4E3F1", borderRadius: 5, height: 40}} titleStyle={{color: "black", fontFamily: "Rubik_400Regular"}}></Button>
	{visible && <DateTimePicker
					testID="dateTimePicker"
					value={date}
					mode={"date"}
					onChange={onChange}
				/>}
	</View>)
};

export default DatePicker;
