import { StyleSheet } from "react-native"

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  mainText: {
    color: "#363636",
    fontSize: 32,
    fontWeight: "900",
    fontFamily: "Raleway_700Bold",
    marginBottom: 40,
  },
  subText: {
    color: "#000",
    fontSize: 22,
    fontFamily: "Raleway_400Regular",
    fontWeight: "400",
  },
  textOne: {
    textAlign: "center",
    marginTop: 12,
    fontFamily: "Raleway_400Regular",
    fontSize: 14,
    color: "#363636",
    lineHeight: 19,
  },
  textButton: {
    textAlign: "center",
    textDecorationLine: "underline",
    fontFamily: "Raleway_400Regular",
    fontSize: 14,
    padding: 12,
    color: "#0038FE",
    lineHeight: 19,
  },
  error: {
    marginTop: -5,
    marginBottom: 10,
    color: "red",
    fontFamily: "Raleway_400Regular",
    fontSize: 12,
    alignSelf: "flex-start",
    paddingLeft: 14,
  },
})
