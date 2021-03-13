import { StyleSheet } from "react-native"

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  containerOne: {
    alignItems: "center",
    justifyContent: "center",
  },
  mainText: {
    color: "#3C3A36",
    fontSize: 26,
    textAlign: "center",
    fontWeight: "900",
    marginTop: 12,
    fontFamily: "Raleway_700Bold",
  },
  subText: {
    color: "#000",
    fontSize: 22,
    fontFamily: "Raleway_400Regular",
    fontWeight: "400",
  },
  introImage: {
    resizeMode: "cover",
  },
  imageHolder: {
    resizeMode: "contain",
    marginTop: 62,
    justifyContent: "center",
    alignItems: "center",
  },
  textButton: {
    marginLeft: "auto",
    padding: 32,
    marginTop: 0,
    fontFamily: "Montserrat_400Regular",
    fontSize: 14,
    color: "#8B8B8B",
    position: "absolute",
    lineHeight: 19,
    top: 14,
    right: 0,
  },
  pagination: {
    marginTop: 32,
    marginBottom: 32,
  },
})
