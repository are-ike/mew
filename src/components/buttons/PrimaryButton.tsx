import React from "react"
import { Text, View, TouchableOpacity } from "react-native"
import styles from "../../styles/primaryButton.styles"

type Props = {
  action: () => void
  buttonText: string
  buttonType?: string
}

const PrimaryButton: React.FC<Props> = ({
	action,
	buttonText,
	buttonType,
}: Props) => {
	return (
		<View style={buttonType ? styles.parentOne : styles.parentTwo}>
			<TouchableOpacity style={styles.button} onPress={action}>
				<Text style={styles.buttonText}>{buttonText}</Text>
			</TouchableOpacity>
		</View>
	)
}

export default PrimaryButton
