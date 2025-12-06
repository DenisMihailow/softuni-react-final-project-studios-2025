import { Route, Routes } from "react-router"
import Header from "./components/Header"
import Home from "./components/Home"
import SaveYourTime from "./components/SaveYourTime"
import Register from "./components/register/Register"
import Login from "./components/login/Login"
import  UserContext from "./contexts/UserContext"
import { useContext } from "react"
import Myreservations from "./components/my-reservations/Myreservations"
import Details from "./components/details/Details"
import Edit from "./components/edit/Edit"

function App() {

const {user} = useContext(UserContext);

  return (//user={user}
    <>
     
      <Header /> 

      <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/nails/book" element={<SaveYourTime />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path = "/reservations/:reservationId/details" element={<Details user={user}/>} />
              <Route path ="/reservations/:reservationId/edit" element={<Edit />} />
              <Route path="/reservations" element={<Myreservations />} />
      </Routes>

    </>
  )
}

export default App
