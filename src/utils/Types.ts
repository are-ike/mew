export type KeyboardTypeTypes =
  | "default"
  | "numeric"
  | "email-address"
  | "ascii-capable"
  | "numbers-and-punctuation"
  | "url"
  | "number-pad"
  | "phone-pad"
  | "name-phone-pad"
  | "decimal-pad"
  | "twitter"
  | "web-search"
  | "visible-password"

export type NavigationProps = {
  navigation: {
    navigate: (
      destination: string,
      loginInfo?: { email: string; password: string }
    ) => void
    push: (s: string) => void
    pop: () => void
    reset: ({ index: number, routes: unknown }) => void
  }
}

type AutoCapitalizeTypes = "none" | "sentences" | "words" | "characters"

export type InputProps = {
  placeHolder: string
  secure?: boolean
  type: string
  iconName?: VectorIconsProps
  withIcon?: boolean
  inputInfo?: boolean
  keyboardType: KeyboardTypeTypes
  infoText?: string
  addNewEntry?: boolean
  linkText?: string
  autoCapitalize?: AutoCapitalizeTypes
  extraAction?: () => void
  onUnfocus?: (type: string, text: string) => void
  textChangeHandler: (text: string | number, type: string | number) => void
  focusFn?: () => void
}

export type VectorIconsProps = "eye-off" | "eye" | undefined

export type TrusteePayloadTypes = {
  fullName: string
  phoneNumber: number
  emailAddress: string
  contactAddress: string
  whenToCall: number
}

export type securityPayloadTypes = {
  question1: string
  answer1: string
  question2: string
  answer2: string
  question3: string
  answer3: string
  checkDate: number
  reminderInterval: number
  whenToCall: string
  phoneNumber: number
}

export type userInfoProps = {
  email: string
  password: string
  acceptableEmail: boolean
  acceptablePassword: boolean
}
