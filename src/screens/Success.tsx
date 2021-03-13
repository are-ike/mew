import React from "react"
import { StatusBar } from "expo-status-bar"
import { View, Text, Image } from "react-native"
import styles from "../styles/success.styles"
import PrimaryButton from "../components/buttons/PrimaryButton"
import successImage from "../assets/Celebration.gif"
import { NavigationProps } from "../utils/Types"

const Success: React.FC<NavigationProps> = (prop) => {
	const { navigation } = prop

	const toSetup = () => navigation.navigate("SecurityChecks")

	return (
		<View style={styles.container}>
			<Image source={successImage} style={styles.successImage} />
			<View style={styles.containerOne}>
				<Text style={styles.mainText}>Successfully{"\n"}Signed Up!</Text>
				<PrimaryButton action={toSetup} buttonText={"Account Setup"} />
			</View>
			<StatusBar style="dark" backgroundColor="#fff" />
		</View>
	)
}

export default Success
