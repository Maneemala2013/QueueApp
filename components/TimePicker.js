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

const TimePicker = () => {
	const [time, setTime] = useState(new Date());
	const [visible, setVisible] = useState(false);

	const onChange = (event, selectedTime) => {
		setVisible(false);
		if (event.type == "set") {
			//ok button clicked
			const currentTime = selectedTime;
			//save local Time
			setTime(currentTime);
		}
		// } else {
		// 	//cancel button clicked
		// }
	};

	const showDialog = () => {
		setVisible(true);
		// showMode("time");
	};

	// const options = {
	// 	weekday: "short",
	// 	year: "numeric",
	// 	month: "short",
	// 	day: "numeric",
	//   };

	// {newValue, display}
	return (<View>
	<Button onPress={showDialog} title={time.toLocaleTimeString('zh-hk')} buttonStyle={{backgroundColor: "#E4E3F1", borderRadius: 5}} titleStyle={{color: "black", fontFamily: "Rubik_400Regular"}}></Button>
	{visible && <DateTimePicker
					testID="dateTimePicker"
					value={time}
					mode={"time"}
					onChange={onChange}
				/>}
	</View>)
};

export default TimePicker;
