import React from "react";
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import HomeScreen from "../../tabs/home/HomeScreen";

const Stack = createStackNavigator();

const HomeNavigation = () => {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
				...TransitionPresets.SlideFromRightIOS,
				animationEnabled: true,
				gestureEnabled: true,
				gestureDirection: "horizontal",
			}}
		>
			<Stack.Screen name="HomeS" component={HomeScreen} />
		</Stack.Navigator>
	);
};

export default HomeNavigation;
