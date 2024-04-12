import { Button } from "./components/ui/button"
import {Route, Routes} from "react-router-dom"
import SignUp from "./pages/SignUp"
import Dashboard from "./pages/Dashboard"
import SignIn from "./pages/SignIn"
import LandingPage from "./pages/LandingPage"

function App() {

  return (
    <div>

    <Routes>
      <Route element={<LandingPage/>} path="/"/>
      <Route element={<SignUp/>} path="/signup"/>
      <Route element={<SignIn/>} path="/signin"/>
      <Route element={<Dashboard/>} path="/dashboard"/>
    </Routes>
      
    </div>
  )
}

export default App
