import { KeyboardTypeTypes } from "../Types"

export const SecurityChecksInputs = [
  {
    placeHolder: "Question",
    keyboardType: "default" as KeyboardTypeTypes,
    type: "question1",
    inputInfo: true,
    addNewEntry: false,
    infoText: "First Security Question",
  },
  {
    placeHolder: "Answer",
    keyboardType: "default" as KeyboardTypeTypes,
    type: "answer1",
    inputInfo: false,
    addNewEntry: false,
  },
  {
    placeHolder: "Question",
    keyboardType: "default" as KeyboardTypeTypes,
    type: "question2",
    inputInfo: true,
    addNewEntry: false,
    infoText: "Second Security Question",
  },
  {
    placeHolder: "Answer",
    keyboardType: "default" as KeyboardTypeTypes,
    type: "answer2",
    inputInfo: false,
    addNewEntry: false,
  },
  {
    placeHolder: "Question",
    keyboardType: "default" as KeyboardTypeTypes,
    type: "question3",
    inputInfo: true,
    addNewEntry: false,
    infoText: "Third Security Question",
  },
  {
    placeHolder: "Answer",
    keyboardType: "default" as KeyboardTypeTypes,
    type: "answer3",
    inputInfo: false,
    addNewEntry: true,
    extraAction: (): void => alert("More security questions"),
    linkText: "Add security questions",
  },
  {
    placeHolder: "Choose check date",
    keyboardType: "numeric" as KeyboardTypeTypes,
    type: "checkDate",
    inputInfo: true,
    infoText: "When should we contact you for the check",
  },
  {
    placeHolder: "Set reminder interval",
    keyboardType: "numeric" as KeyboardTypeTypes,
    type: "reminderInterval",
    inputInfo: true,
    infoText: "When should we remind you if you miss it",
  },
  {
    placeHolder: "Set when to place call",
    keyboardType: "default" as KeyboardTypeTypes,
    type: "whenToCall",
    inputInfo: true,
    infoText: "When should we call you if you miss it",
  },
  {
    placeHolder: "Select phone number",
    keyboardType: "numeric" as KeyboardTypeTypes,
    type: "tel",
    inputInfo: true,
    infoText: "Which number should we call you on",
  },
]

export const TrusteeChecksInputs = [
  {
    placeHolder: "Full Name",
    keyboardType: "default" as KeyboardTypeTypes,
    type: "fullName",
    addNewEntry: false,
  },
  {
    placeHolder: "Phone number",
    keyboardType: "numeric" as KeyboardTypeTypes,
    type: "tel",
    inputInfo: false,
    addNewEntry: false,
  },
  {
    placeHolder: "Email Address",
    keyboardType: "email-address" as KeyboardTypeTypes,
    type: "emailAddress",
    addNewEntry: false,
  },
  {
    placeHolder: "Contact Address",
    keyboardType: "default" as KeyboardTypeTypes,
    type: "contactAddress",
    inputInfo: false,
    addNewEntry: false,
  },
  {
    placeHolder: "Set when to call trustee",
    keyboardType: "default" as KeyboardTypeTypes,
    type: "whenToCall",
    inputInfo: true,
    infoText: "How long should we wait before calling",
    addNewEntry: true,
    extraAction: (): void => alert("Another third party"),
    linkText: "Add another third party",
  },
]

export const INTRO_TWO_TEXT = `Link all your financial
assets together and keep
track of beneficiaries`

export const INTRO_ONE_TEXT = `Easily notify your
loved ones of your
financial assets`

// to check for valid emails
export const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i

// Minimum ten characters, at least one uppercase letter, one lowercase letter, one number and one special character
export const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10,}$/i
