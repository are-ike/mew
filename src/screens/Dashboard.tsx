import React, { useState, useEffect, useRef, useContext } from "react"
import * as Notifications from "expo-notifications"
import { registerForPushNotificationsAsync } from "../utils/notifications/notificationHandler"
import { StatusBar } from "expo-status-bar"
import { View, Text, Image } from "react-native"
import PrimaryButton from "../components/buttons/PrimaryButton"
import dashboardImage from "../assets/dashboard.png"
import { Context as AuthContext } from "../utils/context/AuthContext"
import styles from "../styles/dashboard.styles"
import { NavigationProps } from "../utils/Types"

// set up notification handler
Notifications.setNotificationHandler({
	handleNotification: async () => ({
		shouldShowAlert: true,
		shouldPlaySound: false,
		shouldSetBadge: false,
	}),
})

const Dashboard: React.FC<NavigationProps> = (prop) => {
	const [expoPushToken, setExpoPushToken] = useState("")
	const [notification, setNotification] = useState<boolean | unknown>(false)
	const auth = useContext(AuthContext)
	const notificationListener = useRef(null)
	const responseListener = useRef(null)
	const { navigation } = prop

	useEffect(() => {
		registerForPushNotificationsAsync().then((token) => {
			setExpoPushToken(token as undefined)
		})
		// This listener is fired whenever a notification is received while the app is foregrounded
		notificationListener.current = Notifications.addNotificationReceivedListener(
			(notification) => {
				setNotification(notification)
			}
		)

		// This listener is fired whenever a user taps on or interacts with a notification (works when app is foregrounded, backgrounded, or killed)
		responseListener.current = Notifications.addNotificationResponseReceivedListener(
			toChecks
		)

		return () => {
			Notifications.removeNotificationSubscription(notificationListener.current)
			Notifications.removeNotificationSubscription(responseListener.current)
		}
	}, [])

	const signout = () => auth.signout()
	const toChecks = () => {
		navigation.navigate("CheckNotification")
	}

	return (
		<View style={styles.container}>
			<Image source={dashboardImage} style={styles.dashboardImage} />
			<View style={styles.containerOne}>
				<Text style={styles.mainText}>This is your{"\n"}Dashboard</Text>
				<PrimaryButton action={signout} buttonText="Sign Out" />
			</View>
			<StatusBar style="dark" backgroundColor="#fff" />
		</View>
	)
}

export default Dashboard
