import React, { useEffect } from "react";
import { View } from "react-native";
import styled from "styled-components/native";
import { StatusBar } from "expo-status-bar";
import RootNavigation from "./src/screens/navigation/RootNavigation";
import Toast from "react-native-toast-message";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Provider } from 'react-redux';
import { store } from './src/redux/store';

const App = () => {
	const queryClient = new QueryClient();

	return (
		<Provider store={store}>
			<Container>
				<StatusBar style="auto" />
				<QueryClientProvider client={queryClient}>
				<RootNavigation />
				</QueryClientProvider>
				<Toast />
			</Container>
		</Provider>
	);
};

export default App;

export const Container = styled(View)`
	flex: 1;
`;
