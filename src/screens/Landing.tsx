import React from "react"
import { StatusBar } from "expo-status-bar"
import { View, Text, Image } from "react-native"
import styles from "../styles/landing.styles"
import PrimaryButton from "../components/buttons/PrimaryButton"
import landingImage from "../assets/Family.gif"
import SecondaryButton from "../components/buttons/SecondaryButton"
import { NavigationProps } from "../utils/Types"

const Landing: React.FC<NavigationProps> = (prop) => {
	const { navigation } = prop

	const toIntroOne = () => navigation.navigate("IntroOne")
	const toSignin = () => navigation.navigate("Signin")

	return (
		<View style={styles.container}>
			<Image source={landingImage} style={styles.landingImage} />
			<View style={styles.containerOne}>
				<Text style={styles.subText}>WELCOME TO</Text>
				<Text style={styles.mainText}>Twinku</Text>
				<PrimaryButton action={toIntroOne} buttonText="Get Started" />
				<SecondaryButton
					action={toSignin}
					buttonText="Already have an account? Sign In"
				/>
			</View>
			<StatusBar style="dark" backgroundColor="#fff" />
		</View>
	)
}

export default Landing
