import React from "react"
import { View, Text, TouchableWithoutFeedback } from "react-native"
import styles from "../../styles/extraButton.styles "

type Props = {
  action: () => void | undefined
  buttonText: string
}

const extraButton: React.FC<Props> = ({ action, buttonText }: Props) => {
	return (
		<View>
			<TouchableWithoutFeedback onPress={action}>
				<Text style={styles.textButton}>{buttonText}</Text>
			</TouchableWithoutFeedback>
		</View>
	)
}

export default extraButton
