import React, { useEffect, useState, useContext } from "react"
import { View, StyleSheet, Text } from "react-native"
import Input from "../components/Input"
import Modal from "../components/Modal"
import PrimaryButton from "../components/buttons/PrimaryButton"
import ExtraButton from "../components/buttons/ExtraButton"
import statusTypes from "../utils/statusTypes"
import queries from "../utils/queries"
import { Context as StateContext } from "../utils/context/StateContext"
import styles from "../styles/input.styles"

type Prop = {
	cancel: () => void
}

const Checks: React.FC<Prop> = (prop) => {
	const genState = useContext(StateContext)
	const { getLifeQuestions } = queries

	//const q = [{q: "who is your role model", a: ""}, {q: "what do you like to eat", a: ""}, {q: "where", a: ""}]
	const {FAILED, SUCCEEDED, PENDING} = statusTypes
	const [state, setState] = useState({
		questionIndex: 0,
		answer: "",
		attempts: 3, 
		progress: 0
	})
	const [questions, setQuestions] = useState([])
	const [showSuccess, setShowSuccess] = useState(false)
	const [error, setError] = useState(false)
	
	useEffect(() => {
		if(getLifeQuestions(genState.state.userToken)){
			setQuestions([getLifeQuestions(genState.state.userToken)])
		}else{
			alert("Unable to Perform Checks")
			prop.cancel(PENDING)
		}
	}, [])

	const onChangeText = (text, type) => {
		const typ = type
		const newState = {...state}
		newState.answer = text
		setState(newState)
	}

	const reduceAttempts = () => {
		if(state.attempts > 1){
			const newState = {...state}
			newState.attempts = state.attempts - 1
			setState(newState)
		}else{
			prop.cancel(FAILED)
		}
	} 

	const showError = () => {
		setError(true)
	}
	const removeError = () => {
		if(error){
			setError(false)
		}
	}

	const nextQuestion = () => {
		if(state.questionIndex < 2 ){
			const newState = {...state}
			newState.questionIndex = state.questionIndex + 1
			newState.answer = ""
			newState.attempts = 3
			newState.progress = Math.round((newState.questionIndex / 3) * 100)
			setState(newState)
		}else{
			setShowSuccess(true)
		}
	}
	const onSubmit = () => {
		if(state.answer.toLowerCase() !== questions[state.questionIndex].answer.toLowerCase()){
			reduceAttempts()
			showError()
		}else if(state.answer.toLowerCase() == q[state.questionIndex].a.toLowerCase()){	
			nextQuestion()
		}		
	}


	const infoText = `You have ${state.attempts} left`
	return (
		<Modal>
			{showSuccess ? 
			<View>
				<Text style={styles2.complete}>Complete</Text>
				<PrimaryButton
					buttonText="Go to Dashboard"
					buttonType="small"
					action={() => prop.cancel(SUCCEEDED)}
				/>
			</View>	:
			<View>
				<Text style={styles2.progress}>{state.progress}%</Text>
				<View style={styles.container}>
					<View style={[styles.containerOne]}>
						<Text style={[styles.withoutIcon, styles2.more]}>{questions[state.questionIndex].question}</Text>
					</View>
				</View>
				<Input
					placeHolder="Type your answer here"
					textChangeHandler={onChangeText}
					type={"1"}
					keyboardType="default"
					inputInfo={true}
					infoText={infoText}
					focusFn={() => removeError()}
				/>
				{error ? <Text style={styles2.error}>*Incorrect</Text> : null}
				<ExtraButton
					buttonText="Cancel Checks"
					action={() => {prop.cancel(PENDING)}}
				/>
				<PrimaryButton
					buttonText="Submit"
					buttonType="small"
					action={onSubmit}
				/>
			</View>}
		</Modal>
	)
}
const styles2 = StyleSheet.create({
	more: {
		paddingTop: 12.5
	},
	progress: {
		fontSize: 30,
		fontWeight: "600",
		padding: 7,
		color: "#3965FF"
	},
	complete: {
		fontSize: 30,
		fontWeight: "600",
		padding: 7,
		color: "#3965FF",
		alignSelf: "center"
	},
	error: {
		justifyContent: "flex-start",
		color: "red"
	}
})
export default Checks