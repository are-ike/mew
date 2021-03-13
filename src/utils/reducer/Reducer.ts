import Actions from "../action/ActionType"

const {
  RETRIEVE_TOKEN,
  SIGNIN,
  SIGNOUT,
  JUST_REGISTERED,
  FETCHING,
  DONE_FETCHING,
} = Actions
type Action = {
  token?: string
  type: string
}
type prevState = Record<string, never>

type ReducerReturn = {
  userToken?: string
  isLoading: boolean
  isSignedIn?: boolean
  hasRegistered?: boolean
  justRegistered?: boolean
}
const reducer = (previousState: prevState, action: Action): ReducerReturn => {
  switch (action.type) {
    case RETRIEVE_TOKEN:
      return {
        ...previousState,
        userToken: action.token,
        isLoading: false,
        isSignedIn: true,
      }
    case SIGNIN:
      return {
        ...previousState,
        userToken: action.token,
        isLoading: false,
        isSignedIn: true,
      }
    case SIGNOUT:
      return {
        ...previousState,
        userToken: "",
        isLoading: false,
        isSignedIn: false,
        hasRegistered: true,
        justRegistered: false,
      }
    case JUST_REGISTERED:
      return {
        ...previousState,
        userToken: action.token,
        isLoading: false,
        isSignedIn: true,
        justRegistered: true,
      }
    case FETCHING:
      return {
        ...previousState,
        isLoading: true,
      }
    case DONE_FETCHING:
      return {
        ...previousState,
        isLoading: false,
      }
    default:
      return {
        ...previousState,
        userToken: "",
        isSignedIn: false,
        isLoading: false,
      }
  }
}
export default reducer
