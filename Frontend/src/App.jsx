
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./pages/home/Home"
import SignUp from "./pages/signup/SignUp"
import Login from "./pages/login/Login"


const App = () => {
  return (
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/register" element={<SignUp/>}/>
      <Route path="/login" element={<Login/>}/>

     </Routes>
     
     </BrowserRouter>
  )
}

export default App