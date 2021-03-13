import React from "react"
import { StatusBar } from "expo-status-bar"
import { Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import styles from "../styles/trusteeSetup.styles"
import PrimaryButton from "../components/buttons/PrimaryButton"
import Input from "../components/Input"
import { ScrollView } from "react-native-gesture-handler"
import { NavigationProps, TrusteePayloadTypes } from "../utils/Types"
import { TrusteeChecksInputs } from "../utils/constants/constants"

const TrusteeSetup: React.FC<NavigationProps> = (prop) => {
	const { navigation } = prop
	const [trusteeState, setTrusteeState] = React.useState<TrusteePayloadTypes>({
		fullName: "",
		tel: 2,
		emailAddress: "",
		contactAddress: "",
		whenToCall: 4,
	})

	const onChangeText = (text: string, type: number) => {
		setTrusteeState((prev) => ({ ...prev, [type]: text }))
	}

	const toDashboard = () => {
		const {
			fullName,
			tel,
			emailAddress,
			contactAddress,
			whenToCall,
		} = trusteeState
		const trusteePayload = {
			trusteeInfo: {
				fullName: fullName,
				tel: tel,
				emailAddress: emailAddress,
				contactAddress: contactAddress,
				whenToCall: whenToCall,
			},
		}
		navigation.navigate("Completed")
	}

	return (
		<SafeAreaView style={styles.safeArea}>
			<View style={styles.header}>
				<Text style={styles.mainText}>Set Up Third Party Contact</Text>
			</View>
			<View style={styles.container}>
				<ScrollView
					style={styles.scrollArea}
					showsVerticalScrollIndicator={false}
				>
					<Text
						style={styles.info}
					>{`Who should we contact if you’re unavailable
(Note: this should no be a next of kin)`}</Text>
					{TrusteeChecksInputs.map((input) => (
						<Input
							key={input.type}
							placeHolder={input.placeHolder}
							textChangeHandler={onChangeText}
							type={input.type}
							inputInfo={input.inputInfo}
							infoText={input.infoText}
							keyboardType={input.keyboardType}
							bottomLink={input.bottomLink}
							action={input.action}
							linkText={input.linkText}
						/>
					))}

					<PrimaryButton
						action={toDashboard}
						buttonText="Finish"
						buttonType="wide"
					/>
				</ScrollView>
			</View>
			<StatusBar style="dark" backgroundColor="#fff" />
		</SafeAreaView>
	)
}

export default TrusteeSetup
