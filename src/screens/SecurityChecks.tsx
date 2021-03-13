import React, {useContext} from "react"
import { StatusBar } from "expo-status-bar"
import { Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import styles from "../styles/securityChecks.styles"
import PrimaryButton from "../components/buttons/PrimaryButton"
import Input from "../components/Input"
import queries from "../utils/queries"
import { ScrollView } from "react-native-gesture-handler"
import { Context as StateContext } from "../utils/context/StateContext"
import { NavigationProps, securityPayloadTypes } from "../utils/Types"
import { SecurityChecksInputs } from "../utils/constants/constants"

const SecurityChecks: React.FC<NavigationProps> = (prop) => {
	const { navigation } = prop
	const { state } = useContext(StateContext)
	const { sendSecurityData } = queries
	const [
		securityChecksState,
		setChecksState,
	] = React.useState<securityPayloadTypes>({
		question1: "",
		answer1: "",
		question2: "",
		answer2: "",
		question3: "",
		answer3: "",
		checkDate: 1,
		reminderInterval: 1,
		whenToCall: "",
		phoneNumber: 1,
	})

	const onChangeText = (text: string | number, type: string ) => {
		setChecksState((prev) => ({ ...prev, [type]: text }))
	}

	const toTrusteeSetup = () => {
		const {
			question1,
			answer1,
			question2,
			answer2,
			question3,
			answer3,
			checkDate,
			reminderInterval,
			whenToCall,
			phoneNumber,
		} = securityChecksState
		if(question1 == "" || question2 == "" || question3 == "" || answer1 == "" ||
			answer2 == "" || answer3 == "" || String(checkDate).length == 0 || String(reminderInterval).length == 0  ||
			whenToCall == "" || String(phoneNumber).length == 0){
				alert("Please fill in all inputs")
		}else{
			const securityChecksPayload = `{
				checkDate: "${checkDate}",
				reminderInterval: "${reminderInterval}",
				whenToCall: "${whenToCall}",
				tel: "${phoneNumber}",
				questions: [
					{
						question: "${question1}",
						answer: "${answer1}",
					},
					{
						question: "${question2}",
						answer: "${answer2}",
					},
					{
						question: "${question3}",
						answer: "${answer3}",
					},
				]
			}`
			
			if(sendSecurityData(state.userToken, securityChecksPayload)){
				navigation.navigate("TrusteeSetup")
			}else{
				alert("Unable to add security checks. Please try again")
			}
		}

		}

	return (
		<SafeAreaView style={styles.safeArea}>
			<View style={styles.header}>
				<Text style={styles.mainText}>Set Up Security Questions</Text>
			</View>
			<View style={styles.container}>
				<ScrollView
					style={styles.scrollArea}
					showsVerticalScrollIndicator={false}
				>
					{SecurityChecksInputs.map((input) => (
						<Input
							key={input.type}
							placeHolder={input.placeHolder}
							textChangeHandler={onChangeText}
							type={input.type}
							keyboardType={input.keyboardType}
							inputInfo={input.inputInfo}
							infoText={input.infoText}
							addNewEntry={input.addNewEntry}
							extraAction={input.extraAction}
							linkText={input.linkText}
						/>
					))}

					<PrimaryButton
						action={toTrusteeSetup}
						buttonText="Next"
						buttonType="wide"
					/>
				</ScrollView>
			</View>
			<StatusBar style="dark" backgroundColor="#fff" />
		</SafeAreaView>
	)
}

export default SecurityChecks
