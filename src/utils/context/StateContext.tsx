import React, { createContext } from "react"
import ReducerFunction from "../reducer/Reducer"

type Action = {
  token?: string
  type: string
}
const defaultValue: {
  state: Record<string, unknown>
  dispatch: React.Dispatch<Action>
} = {
	dispatch: () => {
		return {}
	},
	state: { userToken: "" },
}

export const Context = createContext(defaultValue)

const StateContext: React.FC = (prop) => {
	const initialState = {
		userToken: "",
		isLoading: false,
		isSignedIn: false,
	}

	const [state, dispatch] = React.useReducer(ReducerFunction, initialState)

	return (
		<Context.Provider value={{ state, dispatch }}>
			{prop.children}
		</Context.Provider>
	)
}

export default StateContext
