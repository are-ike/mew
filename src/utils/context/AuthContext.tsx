import React, { useMemo, useContext } from "react"
import Actions from "../action/ActionType"
import { addToStorage, removeItemValue } from "../storage/AsyncStorage"
import { Context as StateContext } from "../context/StateContext"

const defaultAuth: {
  signup: (email: string, password: string) => void
  signin: (email: string, password: string) => void
  signout: () => void
} = { signin: Function, signout: Function, signup: Function }

export const Context = React.createContext(defaultAuth)

const AuthContext: React.FC = (prop) => {
	const { dispatch } = useContext(StateContext)

	const auth = useMemo(
		() => ({
			signup: (email: string, password: string) => {
				let token: string
				const string = `mutation registerUser{registerUser(register: {email: "${email.toLowerCase()}", 
        password: "${password}"}){user{id}errors{field message}token}}`

				dispatch({ type: Actions.FETCHING })
				fetch("https://twinku1.herokuapp.com/graphql", {
					method: "post",
					headers: {
						"Accept-Encoding": "gzip, deflate, br",
						"Content-Type": "application/json",
						Connection: "keep-alive",
						DNT: "1",
						Origin: "https://twinku1.herokuapp.com",
					},
					body: JSON.stringify({ query: string }),
				})
					.then((res) => res.json())
					.then((res) => {
						if (res.data.registerUser.token == null) {
							dispatch({ type: Actions.DONE_FETCHING })
							if (res.data.registerUser.errors[0].message)
								alert("Email already taken")
						} else {
							token = res.data.registerUser.token
							addToStorage("userToken", token)
							addToStorage("hasRegistered", token)
							dispatch({ type: Actions.JUST_REGISTERED, token })
						}
					})
					.catch(() => alert("Unable to register"))
			},
			signin: (email: string, password: string) => {
				let token: string
				const query = `mutation loginUser{loginUser(login: {email:"${email.toLowerCase()}", 
        password:"${password}"})
        {token user{id email} errors{ field message}}}`

				dispatch({ type: Actions.FETCHING })
				fetch("https://twinku1.herokuapp.com/graphql", {
					method: "post",
					headers: {
						"Accept-Encoding": "gzip, deflate, br",
						"Content-Type": "application/json",
						Connection: "keep-alive",
						DNT: "1",
						Origin: "https://twinku1.herokuapp.com",
					},
					body: JSON.stringify({ query: query }),
				})
					.then((res) => res.json())
					.then((res) => {
						if (res.data.loginUser.token == null) {
							dispatch({ type: Actions.DONE_FETCHING })
							alert("Invalid email or password")
						} else {
							token = res.data.loginUser.token
							addToStorage("userToken", token)
							dispatch({ type: Actions.SIGNIN, token })
						}
					})
					.catch(() => alert("Unable to sign in"))
			},
			signout: () => {
				removeItemValue("userToken")
				removeItemValue("userID")
				dispatch({ type: Actions.SIGNOUT })
			},
		}),
		[]
	)

	return <Context.Provider value={auth}>{prop.children}</Context.Provider>
}

export default AuthContext
