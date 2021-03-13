import React, { useState, useContext } from "react"
import { StatusBar } from "expo-status-bar"
import {
	Text,
	TouchableWithoutFeedback,
	KeyboardAvoidingView,
	Platform,
} from "react-native"
import styles from "../styles/signup.styles"
import PrimaryButton from "../components/buttons/PrimaryButton"
import Input from "../components/Input"
import { Context as AuthContext } from "../utils/context/AuthContext"
import ExtraButton from "../components/buttons/ExtraButton"
import { NavigationProps } from "../utils/Types"
import { EMAIL_REGEX, PASSWORD_REGEX } from "../utils/constants/constants"

const Signup: React.FC<NavigationProps> = (prop) => {
	const { navigation } = prop
	const auth = useContext(AuthContext)
	const [userInfo, setUserInfo] = useState({
		email: "",
		password: "",
		confirmedPassword: "",
		acceptableEmail: true,
		acceptablePassword: true,
		acceptableConfirmedPassword: true,
	})
	const [errors, setErrors] = useState({
		email: "",
		password: "",
		confirmedPassword: "",
	})

	const onChangeText = (text: string, type: string) => {
		const emailValidationRegex = (email: string) => EMAIL_REGEX.test(email)
		const passwordValidationRegex = (password: string) =>
			PASSWORD_REGEX.test(password)
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
			} else if (!passwordValidationRegex(text)) {
				setUserInfo({ ...userInfo, [type]: text, acceptablePassword: false })
				setErrors({
					...errors,
					[type]:
            "Password must contain at least 10 characters, including one special character, one uppercase letter and one lowercase letter",
				})
			} else {
				setErrors({ ...errors, [type]: "" })
				setUserInfo({ ...userInfo, [type]: text, acceptablePassword: true })
			}
		} else if (type === "confirmedPassword") {
			if (text.length === 0) {
				setUserInfo({
					...userInfo,
					[type]: text,
					acceptableConfirmedPassword: false,
				})
				setErrors({ ...errors, [type]: "Confirmation password is required" })
			} else if (!passwordValidationRegex(text)) {
				setUserInfo({
					...userInfo,
					[type]: text,
					acceptableConfirmedPassword: false,
				})
				setErrors({
					...errors,
					[type]:
            "Password must contain at least 10 characters, including one special character, one uppercase letter and one lowercase letter",
				})
			} else if (userInfo.password !== text) {
				setUserInfo({
					...userInfo,
					[type]: text,
					acceptableConfirmedPassword: false,
				})
				setErrors({ ...errors, [type]: "Passwords don't match" })
			} else {
				setErrors({ ...errors, [type]: "" })
				setUserInfo({
					...userInfo,
					[type]: text,
					acceptableConfirmedPassword: true,
				})
			}
		}
	}

	const onUnfocus = (type: string, text: string) => {
		const emailValidationRegex = (email: string) => EMAIL_REGEX.test(email)
		const passwordValidationRegex = (password: string) =>
			PASSWORD_REGEX.test(password)
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
			} else if (!passwordValidationRegex(text)) {
				setUserInfo({ ...userInfo, [type]: text, acceptablePassword: false })
				setErrors({
					...errors,
					[type]:
            "Password must contain at least 10 characters, including one special character, one uppercase letter and one lowercase letter",
				})
			} else {
				setErrors({ ...errors, [type]: "" })
				setUserInfo({ ...userInfo, [type]: text, acceptablePassword: true })
			}
		} else if (type === "confirmedPassword") {
			if (text.length === 0) {
				setUserInfo({
					...userInfo,
					[type]: text,
					acceptableConfirmedPassword: false,
				})
				setErrors({ ...errors, [type]: "Confirmation password is required" })
			} else if (!passwordValidationRegex(text)) {
				setUserInfo({
					...userInfo,
					[type]: text,
					acceptableConfirmedPassword: false,
				})
				setErrors({
					...errors,
					[type]:
            "Password must contain at least 10 characters, including one special character, one uppercase letter and one lowercase letter",
				})
			} else if (userInfo.password !== text) {
				setUserInfo({
					...userInfo,
					[type]: text,
					acceptableConfirmedPassword: false,
				})
				setErrors({ ...errors, [type]: "Passwords don't match" })
			} else {
				setErrors({ ...errors, [type]: "" })
				setUserInfo({
					...userInfo,
					[type]: text,
					acceptableConfirmedPassword: true,
				})
			}
		}
	}

	const toSignin = () => navigation.navigate("Signin")
	const tAndC = () => alert("Terms and Conditions")
	const privacyPolicy = () => alert("Privacy Policy")
	const register = () => {
		if (
			!errors.email &&
      !errors.password &&
      !errors.confirmedPassword &&
      userInfo.email &&
      userInfo.password &&
      userInfo.confirmedPassword
		)
			auth.signup(userInfo.email, userInfo.password)
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
			<Text style={styles.mainText}>Sign Up</Text>
			<Input
				placeHolder="Enter Email"
				textChangeHandler={onChangeText}
				keyboardType="email-address"
				type={"email"}
				autoCapitalize={"none"}
				onUnfocus={onUnfocus}
			/>

			{!userInfo.acceptableEmail ? (
				<Text style={styles.error}>{errors.email}</Text>
			) : null}

			<Input
				placeHolder="Password"
				secure={true}
				textChangeHandler={onChangeText}
				type={"password"}
				onUnfocus={onUnfocus}
				keyboardType="default"
				iconName="eye-off"
			/>

			{!userInfo.acceptablePassword ? (
				<Text style={styles.error}>{errors.password}</Text>
			) : null}

			<Input
				placeHolder="Confirm Password"
				secure={true}
				textChangeHandler={onChangeText}
				keyboardType="default"
				type={"confirmedPassword"}
				onUnfocus={onUnfocus}
				iconName="eye-off"
			/>

			{!userInfo.acceptableConfirmedPassword ? (
				<Text style={styles.error}>{errors.confirmedPassword}</Text>
			) : null}

			<Text style={styles.textOne}>
        Clicking the “Sign Up” button{"\n"}
        means you agree to our{" "}
				<TouchableWithoutFeedback onPress={tAndC}>
					<Text style={styles.textButton}>Terms and {"\n"} Conditions</Text>
				</TouchableWithoutFeedback>{" "}
        and{" "}
				<TouchableWithoutFeedback onPress={privacyPolicy}>
					<Text style={styles.textButton}>Privacy Policy</Text>
				</TouchableWithoutFeedback>
			</Text>
			<PrimaryButton action={register} buttonText="Sign Up" buttonType="wide" />
			<ExtraButton
				action={toSignin}
				buttonText="Already have an account? Sign In"
			/>
			<StatusBar style="dark" backgroundColor="#fff" />
		</KeyboardAvoidingView>
	)
}

export default Signup
