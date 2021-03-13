import React from "react"
import { StatusBar } from "expo-status-bar"
import { View, Text, Image, TouchableWithoutFeedback } from "react-native"
import { INTRO_ONE_TEXT } from "../utils/constants/constants"
import styles from "../styles/introOne.styles"
import { NavigationProps } from "../utils/Types"
import PrimaryButton from "../components/buttons/PrimaryButton"
import introImage from "../assets/intro-one.png"
import pagination from "../assets/pagination1.png"

const IntroOne: React.FC<NavigationProps> = (prop) => {
	const { navigation } = prop

	const toSignup = () => navigation.navigate("Signup")
	const toIntroTwo = () => navigation.navigate("IntroTwo")

	return (
		<View style={styles.container}>
			<TouchableWithoutFeedback onPress={toSignup}>
				<Text style={styles.textButton}>Skip</Text>
			</TouchableWithoutFeedback>
			<View style={styles.imageHolder}>
				<Image source={introImage} style={styles.introImage} />
			</View>
			<View style={styles.containerOne}>
				<Text style={styles.mainText}>{INTRO_ONE_TEXT}</Text>
				<PrimaryButton
					action={toIntroTwo}
					buttonType="wide"
					buttonText="Next"
				/>
				<Image source={pagination} style={styles.pagination} />
			</View>
			<StatusBar style="dark" backgroundColor="#fff" />
		</View>
	)
}

export default IntroOne
