import React, { useContext, useEffect } from "react"
import { Screens } from "../constants/screenConstants"
import { createStackNavigator } from "@react-navigation/stack"
import { NavigationContainer } from "@react-navigation/native"
import { ActivityIndicator, View } from "react-native"
import { Context } from "../context/StateContext"
import AuthContext from "../context/AuthContext"
import Actions from "../action/ActionType"
import { retrieveFromStorage } from "../storage/AsyncStorage"
import styles from "../../styles/AppStyles"

const Stack = createStackNavigator()

const ScreenManager: React.FC = () => {
	const { state, dispatch } = useContext(Context)
	const [
		LandingScreen,
		IntroOneScreen,
		IntroTwoScreen,
		SignupScreen,
		SigninScreen,
		SuccessScreen,
		SecurityChecksScreen,
		TrusteeSetupScreen,
		CompletedScreen,
		DashboardScreen,
		CheckNotificationScreen,
		Checks,
		AccountLocked
	] = Screens
	useEffect(() => {
		retrieveFromStorage("userToken").then((res) => {
			if (res) {
				dispatch({ type: Actions.RETRIEVE_TOKEN, token: res })
			} else {
				retrieveFromStorage("hasRegistered").then((res) => {
					if (res) {
						dispatch({ type: Actions.SIGNOUT })
					} else {
						dispatch({ type: "none" })
					}
				})
			}
		})
	}, [])

	const switchScreens = () => {
		let screensAccesibleToUser = [...Screens]
		if (state?.justRegistered == true && state?.isSignedIn == true) {
			screensAccesibleToUser = [
				SuccessScreen,
				SecurityChecksScreen,
				TrusteeSetupScreen,
				CompletedScreen,
				DashboardScreen,
				CheckNotificationScreen,
				Checks,
				AccountLocked
			]
		}
		if (state?.isSignedIn == true && !state?.justRegistered) {
			screensAccesibleToUser = [
				SecurityChecksScreen,
				TrusteeSetupScreen,
				CompletedScreen,
				DashboardScreen,
				CheckNotificationScreen,
				Checks,
				AccountLocked
			]
		}
		if (state?.hasRegistered && !state?.isSignedIn) {
			screensAccesibleToUser = [SigninScreen, SignupScreen]
		}
		if (!state?.hasRegistered && !state?.isSignedIn) {
			screensAccesibleToUser = Screens.slice(0, 8)
		}
		return screensAccesibleToUser
	}

	if (state?.isLoading) {
		return (
			<View style={[styles.container, styles.horizontal]}>
				<ActivityIndicator size="large" color="#3965FF" />
			</View>
		)
	}

	return (
		<AuthContext>
			<NavigationContainer>
				<Stack.Navigator screenOptions={{ headerShown: false }}>
					{switchScreens().map((screen) => (
						<Stack.Screen
							key={screen.name}
							name={screen.name}
							component={screen.component}
						/>
					))}
				</Stack.Navigator>
			</NavigationContainer>
		</AuthContext>
	)
}
export default ScreenManager
