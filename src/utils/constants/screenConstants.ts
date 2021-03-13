import Landing from "../../screens/Landing"
import IntroOne from "../../screens/IntroOne"
import IntroTwo from "../../screens/IntroTwo"
import Signup from "../../screens/Signup"
import SecurityChecks from "../../screens/SecurityChecks"
import TrusteeSetup from "../../screens/TrusteeSetup"
import Signin from "../../screens/Signin"
import Success from "../../screens/Success"
import Completed from "../../screens/Completed"
import Dashboard from "../../screens/Dashboard"
import Checks from "../../screens/Checks"
import AccountLocked from "../../screens/AccountLocked"
import CheckNotification from "../../screens/CheckNotification"

export const Screens = [
  { name: "Landing", component: Landing },
  { name: "IntroOne", component: IntroOne },
  { name: "IntroTwo", component: IntroTwo },
  { name: "Signup", component: Signup },
  { name: "Signin", component: Signin },
  { name: "Success", component: Success },
  { name: "SecurityChecks", component: SecurityChecks },
  { name: "TrusteeSetup", component: TrusteeSetup },
  { name: "Completed", component: Completed },
  { name: "Dashboard", component: Dashboard },
  { name: "CheckNotification", component: CheckNotification },
  { name: "Checks", component: Checks },
  { name: "AccountLocked", component: AccountLocked }
]
