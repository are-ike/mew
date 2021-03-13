import * as Notifications from "expo-notifications"
import Constants from "expo-constants"
import { Platform } from "react-native"

// Can use this function below, OR use Expo's Push Notification Tool-> https://expo.io/notifications
export const sendPushNotification = async (
  expoPushToken: string
): Promise<void> => {
  const message = {
    to: expoPushToken,
    sound: "default",
    title: "Time for a Security Check",
    body:
      "It's time for your routine security check. This should only take a few minutes.",
    data: { someData: "goes here" },
  }

  await fetch("https://exp.host/--/api/v2/push/send", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Accept-encoding": "gzip, deflate",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(message),
  })
}

// register for notifications
export const registerForPushNotificationsAsync = async (): Promise<string> => {
  let token: string
  if (Constants.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync()
    let finalStatus = existingStatus
    if (existingStatus !== "granted") {
      const { status } = await Notifications.requestPermissionsAsync()
      finalStatus = status
    }
    if (finalStatus !== "granted") {
      alert("Failed to get push token for push notification!")
      return
    }
    token = (await Notifications.getExpoPushTokenAsync()).data
  } else {
    alert("Must use physical device for Push Notifications")
  }

  if (Platform.OS === "android") {
    Notifications.setNotificationChannelAsync("default", {
      name: "default",
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: "#FF231F7C",
    })
  }

  return token
}
