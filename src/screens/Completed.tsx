import React from "react"
import { StatusBar } from "expo-status-bar"
import { View, Text, Image } from "react-native"
import styles from "../styles/success.styles"
import PrimaryButton from "../components/buttons/PrimaryButton"
import successImage from "../assets/Celebration.gif"
import { NavigationProps } from "../utils/Types"

const Completed: React.FC<NavigationProps> = (prop) => {
	const { navigation } = prop

	const toSetup = () =>
		navigation.reset({
			index: 0,
			routes: [{ name: "Dashboard" }],
		})

	return (
		<View style={styles.container}>
			<Image source={successImage} style={styles.successImage} />
			<View style={styles.containerOne}>
				<Text style={styles.mainText}>Account Setup{"\n"}Complete!</Text>
				<PrimaryButton action={toSetup} buttonText={"Go to Dashboard"} />
			</View>
			<StatusBar style="dark" backgroundColor="#fff" />
		</View>
	)
}

export default Completed
