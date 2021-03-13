import { StyleSheet } from "react-native"

export default StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  scrollArea: {
    flex: 1,
  },
  header: {
    alignItems: "center",
    borderColor: "#ADADAD",
  },
  mainText: {
    color: "#3965FF",
    fontSize: 20,
    fontWeight: "900",
    fontFamily: "Raleway_700Bold",
    marginVertical: 20,
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
    marginTop: 32,
    fontFamily: "Raleway_400Regular",
    fontSize: 14,
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
    paddingLeft: 32,
    marginLeft: 20,
    width: "80%",
  },
})
