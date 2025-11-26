import { Route, Routes } from "react-router"
import Header from "./components/Header"
import Home from "./components/Home"
import SaveYourTime from "./components/SaveYourTime"

function App() {

  return (
    <>
        <div className="global-background"></div>

      <Header />

      <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/nails/book" element={<SaveYourTime />} />
      </Routes>

    </>
  )
}

export default App
