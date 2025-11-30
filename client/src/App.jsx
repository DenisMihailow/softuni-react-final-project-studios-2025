import { Route, Routes } from "react-router"
import Header from "./components/Header"
import Home from "./components/Home"
import SaveYourTime from "./components/SaveYourTime"
import Register from "./components/register/Register"
import Login from "./components/login/Login"
import  UserContext from "./contexts/UserContext"
import { useContext } from "react"

function App() {

const {user} = useContext(UserContext);

  return (
    <>
     
      <Header user={user}/>

      <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/nails/book" element={<SaveYourTime />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
      </Routes>

    </>
  )
}

export default App
