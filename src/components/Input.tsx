import React from "react"
import { View, TextInput, Text } from "react-native"
import { Feather } from "@expo/vector-icons"
import styles from "../styles/input.styles"
import SecondaryButton from "./buttons/SecondaryButton"
import { InputProps, VectorIconsProps } from "../utils/Types"

const Input: React.FC<InputProps> = (prop) => {
	const {
		placeHolder,
		secure,
		withIcon,
		iconName,
		inputInfo,
		infoText,
		addNewEntry,
		linkText,
		extraAction,
		keyboardType,
		textChangeHandler,
		autoCapitalize,
		type,
		onUnfocus,
	} = prop
	const [secured, setSecured] = React.useState<boolean>(secure as boolean)
	const [showPassword, setShowPassword] = React.useState<VectorIconsProps>(
		"eye-off"
	)

	const togglePasswordDisplay = () => {
		if (iconName && showPassword === "eye-off") {
			setShowPassword("eye")
			setSecured(!secure)
		} else {
			setShowPassword("eye-off")
			setSecured(secure as boolean)
		}
	}

	return (
		<View style={styles.container}>
			{inputInfo === true && <Text style={styles.inputInfo}>{infoText}</Text>}
			<View style={styles.containerOne}>
				<TextInput
					placeholder={placeHolder}
					style={withIcon ? styles.withIcon : styles.withoutIcon}
					secureTextEntry={secured}
					keyboardType={keyboardType}
					autoCapitalize={autoCapitalize}
					onChangeText={(text) => {
						textChangeHandler(text, type)
					}}
					onEndEditing={(event) => {
						{
							secure && showPassword === "eye" && togglePasswordDisplay()
						}
					}}
				/>
				{secure ? (
					<Feather
						style={styles.icon}
						onPress={togglePasswordDisplay}
						name={showPassword}
						size={19}
						color="#929292"
					/>
				) : (
					withIcon && (
						<Feather
							style={styles.icon}
							onPress={togglePasswordDisplay}
							name={iconName}
							size={19}
							color="#929292"
						/>
					)
				)}
			</View>
			{addNewEntry === true && (
				<SecondaryButton action={extraAction} buttonText={linkText} />
			)}
		</View>
	)
}

export default Input
