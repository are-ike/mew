import { StyleSheet } from "react-native"

export default StyleSheet.create({
  container: {
    width: 300,
  },
  containerOne: {
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ADADAD",
    flex: 0,
    flexDirection: "row",
    alignContent: "center",
    marginBottom: 12,
    width: "100%",
  },
  withoutIcon: {
    fontFamily: "Raleway_400Regular",
    fontSize: 16,
    paddingHorizontal: 16,
    color: "#313131",
    width: "100%",
    height: "100%",
  },
  withIcon: {
    fontFamily: "Raleway_400Regular",
    fontSize: 16,
    paddingLeft: 16,
    paddingRight: 46,
    color: "#313131",
    height: "100%",
    width: "100%",
  },
  icon: {
    position: "absolute",
    textAlign: "center",
    textAlignVertical: "center",
    right: 0,
    width: 50,
    height: "100%",
  },
  inputInfo: {
    fontFamily: "Raleway_400Regular",
    fontSize: 14,
    color: "#313131",
    lineHeight: 19,
    padding: 8,
  },
})
