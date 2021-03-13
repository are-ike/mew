import React from "react"
import { StatusBar } from "expo-status-bar"
import { View, Text, Image } from "react-native"
import { INTRO_TWO_TEXT } from "../utils/constants/constants"
import styles from "../styles/introTwo.styles"
import PrimaryButton from "../components/buttons/PrimaryButton"
import introImage from "../assets/intro-two.png"
import pagination from "../assets/pagination2.png"

type Props = {
  navigation: {
    navigate: (s: string) => void
    push: (s: string) => void
    pop: () => void
  }
}

const IntroTwo: React.FC<Props> = (prop) => {
	const { navigation } = prop

	const toSignup = () => navigation.navigate("Signup")

	return (
		<View style={styles.container}>
			<View style={styles.imageHolder}>
				<Image source={introImage} style={styles.introOneImage} />
			</View>
			<View style={styles.containerOne}>
				<Text style={styles.mainText}>{INTRO_TWO_TEXT}</Text>
				<PrimaryButton action={toSignup} buttonType="wide" buttonText="Next" />
				<Image source={pagination} style={styles.pagination} />
			</View>
			<StatusBar style="dark" backgroundColor="#fff" />
		</View>
	)
}

export default IntroTwo
