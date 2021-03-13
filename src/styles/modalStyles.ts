import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
	underlay: {
		backgroundColor: "rgba(0, 0, 0, 0.3)",
		justifyContent: "center",
		zIndex: 1,
		flex: 1,
		position: "absolute",
		top: 0,
		bottom: 0,
		left: 0,
		right: 0
	},
	overlay: {
		backgroundColor: "white",
		alignSelf: "center",
		borderRadius: 15,
		height: "50%",
		width: "90%", 
		justifyContent: "center",
		alignItems: "center",
		paddingHorizontal: 20,
		paddingTop: 50,
		zIndex: 3
	}

})

export default styles