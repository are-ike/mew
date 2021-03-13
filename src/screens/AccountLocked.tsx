import React, { useContext, useState } from "react"
import { View, Text, Image } from "react-native"
import { StatusBar } from "expo-status-bar"
import styles from "../styles/checkNotification.styles"
import PrimaryButton from "../components/buttons/PrimaryButton"
import SuspendedImage from "../assets/check.gif"
import ExtraButton from "../components/buttons/ExtraButton"
import {Context as AuthContext} from "../utils/context/AuthContext"

const AccountLocked: React.FC = () => {

	const {signout} = useContext(AuthContext)
	const verify = () => {
		alert("An email has been sent. We will get back to you shortly")
	}
	return (
		<View style={styles.container}>
		   <Image
			 source={SuspendedImage}
			 style={styles.checkNotificationImage}
		   />
		   <View style={styles.containerOne}>
			 <Text style={styles.mainText}>
			   Account Locked.{"\n"}verify account.
			 </Text>
			 <PrimaryButton action={verify} buttonText="Verify" />
			 <ExtraButton
					buttonText="Sign Out"
					action={() => {signout()}}
				/>
		   </View>
		   <StatusBar style="dark" backgroundColor="#fff" />
		 </View>
	)
}

export default AccountLocked