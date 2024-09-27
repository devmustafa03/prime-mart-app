import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import Animated, { FadeInDown, FadeInRight } from "react-native-reanimated";
import ButtonOutline from "@/src/components/ButtonOutline";
import Button from "@/src/components/Button";
import Breaker from "@/src/components/Breaker";
import { AntDesign } from "@expo/vector-icons";
import { Image } from "expo-image";
import { NavigationProp, useNavigation } from "@react-navigation/native";

const WelcomeScreen = () => {
	const { navigate: navigateAuth }: NavigationProp<AuthNavigationType> =
		useNavigation();
	const blurhash =
		"|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

	return (
		<SafeAreaView className="flex-1 justify-between items-center bg-white px-8 pb-12">
			<StatusBar style="auto" />
			<View className="justify-center items-center flex-1">
				<Animated.View
					entering={FadeInRight.duration(100).springify()}
					className="flex-row justify-center items-center"
				>
					<View className="mt-12">
						<View className="w-40 h-40 overflow-hidden">
							<Image
								source={require("../../../assets/images/icon.png")}
								placeholder={blurhash}
								contentFit="cover"
								transition={1000}
								className="w-full h-full flex-1"
							/>
						</View>
					</View>
				</Animated.View>
				<Animated.Text
					className="text-black/70 text-3xl font-medium leading-[60px]"
					entering={FadeInDown.duration(100).delay(100).springify()}
				>
					Welcome
				</Animated.Text>
			</View>

			<View className="w-full justify-start">
				<Animated.View
					entering={FadeInDown.duration(100).delay(300).springify()}
					className="pb-4"
				>
					<Button title="Login" action={() => navigateAuth("Login")} />
				</Animated.View>
				<Animated.View
					entering={FadeInDown.duration(100).delay(300).springify()}
					className=""
				>
					<ButtonOutline
						title="Sign Up"
						action={() => navigateAuth("Register")}
					/>
				</Animated.View>
			</View>
		</SafeAreaView>
	);
};

export default WelcomeScreen;
