
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./pages/home/Home"
import SignUp from "./pages/signup/SignUp"
import Login from "./pages/login/Login"
import Chat from "./pages/chat/Chat"
import SingleChat from "./pages/chat/Single"


const App = () => {
  return (
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/register" element={<SignUp/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/chat" element={<Chat/>}/>
      <Route path="/singlechat/:id" element={<SingleChat/>}/>
      
     </Routes>
     </BrowserRouter>
  )
}

export default App