import React, { useContext, useEffect, useState } from "react"
import { StatusBar } from "expo-status-bar"
import { View, Text, Image } from "react-native"
import styles from "../styles/checkNotification.styles"
import PrimaryButton from "../components/buttons/PrimaryButton"
import CheckNotificationImage from "../assets/check.gif"
import { NavigationProps } from "../utils/types"
import Checks from "./Checks"
import statusTypes from "../utils/statusTypes"
import {Screens} from "../utils/constants/screenConstants"

const CheckNotification: React.FC<NavigationProps> = (prop) => {
  const { navigation } = prop
  const {PENDING, FAILED, SUCCEEDED} = statusTypes

  const [state, setState] = useState({
    display: true,
    status: PENDING
  })

  useEffect(() => {
    if(state.status == FAILED){
      navigation.reset({
        index: 0,
        routes: [Screens[12]],
      })
    }else if(state.status == SUCCEEDED){
      navigation.reset({
        index: 0,
        routes: [Screens[9]],
      });
    }
  }, [state.status])

  const startCheck = () => {
    const newState = {...state}
    newState.display = true
    setState(newState)
  }

  const endCheck = (status: string) => {
    const newState = {...state}
    newState.display = false
    newState.status = status
    setState(newState)
  }


  return (
    <View style={styles.container}>
   {state.display ? <Checks cancel={endCheck}/> : null}
      <Image
        source={CheckNotificationImage}
        style={styles.checkNotificationImage}
      />
      <View style={styles.containerOne}>
        <Text style={styles.mainText}>
          It&apos;s time for a{"\n"}security check!
        </Text>
        <PrimaryButton action={startCheck} buttonText="Start Check" />
      </View>
      <StatusBar style="dark" backgroundColor="#fff" />
    </View>
  )
}

export default CheckNotification
