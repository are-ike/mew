import React from "react"
import { View } from "react-native"
import styles from "../styles/modalStyles"

const Modal: React.FC = (prop) => {
	return (
		<View style={styles.underlay}>
			<View style={styles.overlay}>
				{prop.children}
			</View>
		</View>			
	)
}



export default Modal