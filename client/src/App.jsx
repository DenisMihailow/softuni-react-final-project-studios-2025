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
import Catalog from "./components/catalog/Catalog"
import Gallery from "./components/gallery/Gallery"
import AdminGallery from "./components/admin-gallery/AdminGallery"
import PrivateRoute from "./guards/AuthGuard"
import AdminGuard from "./guards/AdminGuard"
import Logout from "./components/logout/Logout"

function App() {

const {user} = useContext(UserContext);
  return (//user={user}
    <>
     
      <Header /> 

      <Routes>
              <Route path="/" element={<Home />} />              
              <Route path="/nails/catalog" element={<Catalog/>} />
              <Route element={<PrivateRoute />}> <Route path="/nails/book" element={<SaveYourTime />} /> </Route>
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route element={<AdminGuard />}> <Route path="/admin/gallery" element={<AdminGallery />} /> </Route>
              <Route path = "/reservations/:reservationId/details" element={<Details user={user}/>} />
              <Route path ="/reservations/:reservationId/edit" element={<Edit />} />
              <Route element={<PrivateRoute />}> <Route path="/reservations" element={<Myreservations />} /> </Route>
              <Route path="/logout" element={<Logout />} />
      </Routes>

    </>
  )
}

export default App
