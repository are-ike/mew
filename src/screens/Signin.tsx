import React, { useState, useContext } from "react"
import { StatusBar } from "expo-status-bar"
import { View, Text, KeyboardAvoidingView, Platform } from "react-native"
import styles from "../styles/signin.styles"
import PrimaryButton from "../components/buttons/PrimaryButton"
import Input from "../components/Input"
import { Context as AuthContext } from "../utils/context/AuthContext"
import SecondaryButton from "../components/buttons/SecondaryButton"
import ExtraButton from "../components/buttons/ExtraButton"
import { NavigationProps, userInfoProps } from "../utils/Types"
import { EMAIL_REGEX } from "../utils/constants/constants"

const Signin: React.FC<NavigationProps> = (prop) => {
	const { navigation } = prop
	const auth = useContext(AuthContext)
	const [userInfo, setUserInfo] = useState<userInfoProps>({
		email: "",
		password: "",
		acceptableEmail: true,
		acceptablePassword: true,
	})
	const [errors, setErrors] = useState({ email: "", password: "" })

	const onChangeText = (text: string, type: string) => {
		const emailValidationRegex = (email: string) => EMAIL_REGEX.test(email)
		if (type === "email") {
			if (text.length === 0) {
				setUserInfo({ ...userInfo, [type]: text, acceptableEmail: false })
				setErrors({ ...errors, [type]: "Email address is required" })
			} else if (!emailValidationRegex(text)) {
				setUserInfo({ ...userInfo, [type]: text, acceptableEmail: false })
				setErrors({ ...errors, [type]: "Invalid email address" })
			} else {
				setErrors({ ...errors, [type]: "" })
				setUserInfo({ ...userInfo, [type]: text, acceptableEmail: true })
			}
		} else if (type === "password") {
			if (text.length === 0) {
				setUserInfo({ ...userInfo, [type]: text, acceptablePassword: false })
				setErrors({ ...errors, [type]: "Password is required" })
			} else if (text.length <= 10) {
				setUserInfo({ ...userInfo, [type]: text, acceptablePassword: false })
				setErrors({
					...errors,
					[type]: "Password must be at least 10 characters",
				})
			} else {
				setErrors({ ...errors, [type]: "" })
				setUserInfo({ ...userInfo, [type]: text, acceptablePassword: true })
			}
		}
	}

	const onUnfocus = (type: string, text: string) => {
		const emailValidationRegex = (email: string) => EMAIL_REGEX.test(email)
		if (type === "email") {
			if (text.length === 0) {
				setUserInfo({ ...userInfo, [type]: text, acceptableEmail: false })
				setErrors({ ...errors, [type]: "Email address is required" })
			} else if (!emailValidationRegex(text)) {
				setUserInfo({ ...userInfo, [type]: text, acceptableEmail: false })
				setErrors({ ...errors, [type]: "Invalid email address" })
			} else {
				setUserInfo({ ...userInfo, [type]: text, acceptableEmail: true })
			}
		} else if (type === "password") {
			if (text.length === 0) {
				setUserInfo({ ...userInfo, [type]: text, acceptablePassword: false })
				setErrors({ ...errors, [type]: "Password is required" })
			} else if (text.length <= 10) {
				setUserInfo({ ...userInfo, [type]: text, acceptablePassword: false })
				setErrors({
					...errors,
					[type]: "Password must be at least 10 characters",
				})
			} else {
				setUserInfo({ ...userInfo, [type]: text, acceptablePassword: true })
			}
		}
	}

	const toSignup = () => navigation.navigate("Signup")
	const forgotPassword = () => alert("Reset Password")

	const login = () => {
		if (
			!errors.email &&
      !errors.password &&
      userInfo.email &&
      userInfo.password
		)
			auth.signin(userInfo.email, userInfo.password)
		else {
			alert("Please enter valid inputs")
		}
	}

	return (
		<KeyboardAvoidingView
			behavior={Platform.OS == "ios" ? "padding" : "height"}
			style={styles.container}
			enabled={false}
		>
			<View style={styles.container}>
				<Text style={styles.mainText}>Sign In</Text>
				<Input
					placeHolder="Enter Email"
					textChangeHandler={onChangeText}
					type={"email"}
					onUnfocus={onUnfocus}
					keyboardType="email-address"
				/>

				{!userInfo.acceptableEmail ? (
					<Text style={styles.error}>{errors.email}</Text>
				) : null}

				<Input
					placeHolder="Password"
					secure={true}
					textChangeHandler={onChangeText}
					keyboardType="default"
					type={"password"}
					onUnfocus={onUnfocus}
					iconName="eye-off"
				/>

				{!userInfo.acceptablePassword ? (
					<Text style={styles.error}>{errors.password}</Text>
				) : null}

				<SecondaryButton
					action={forgotPassword}
					buttonText="Forgot Password?"
				/>
				<PrimaryButton action={login} buttonText="Sign In" buttonType="wide" />
				<ExtraButton
					action={toSignup}
					buttonText="Don't have an account yet? Sign Up"
				/>
				<StatusBar style="dark" backgroundColor="#fff" />
			</View>
		</KeyboardAvoidingView>
	)
}

export default Signin
