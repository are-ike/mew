import React from "react"
import Screens from "./src/utils/screenManager/ScreenManager"
import StateContext from "./src/utils/context/StateContext"
import AppLoading from "expo-app-loading"
import { QueryClient, QueryClientProvider } from "react-query"
import { Raleway_400Regular, Raleway_700Bold } from "@expo-google-fonts/raleway"
import {
	useFonts,
	Montserrat_700Bold,
	Montserrat_400Regular,
} from "@expo-google-fonts/montserrat"

const queryClient = new QueryClient()

const App: React.FC = () => {
	const [fontsLoaded] = useFonts({
		Montserrat_700Bold,
		Raleway_400Regular,
		Raleway_700Bold,
		Montserrat_400Regular,
	})

	if (!fontsLoaded) {
		return <AppLoading />
	}

	return (
		<QueryClientProvider client={queryClient}>
			<StateContext>
				<Screens />
			</StateContext>
		</QueryClientProvider>
	)
}

export default App
