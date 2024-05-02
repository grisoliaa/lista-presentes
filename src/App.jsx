import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./pages/Home.jsx"
import Buy from "./pages/Buy.jsx"
import Info from "./pages/Info.jsx"
import Pay from "./pages/Pay.jsx"
import Login from "./pages/Login.jsx"
import Create from "./pages/Create.jsx"
import Events from "./pages/Events.jsx"
import CreateEvent from "./pages/CreateEvent.jsx"
import './App.css'

const App = () => {

  return (
    
      <BrowserRouter>
      
          <Routes>

              <Route path="/" element={<Home/>}/>
              <Route path="/buy" element={<Buy/>}/>
              <Route path="/info" element={<Info/>}/>
              <Route path="/payment" element={<Pay/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/createaccount" element={<Create/>}/>
              <Route path="/events" element={<Events/>}/>
              <Route path="/createevent" element={<CreateEvent/>}/>

          </Routes>
      
      </BrowserRouter>

  )

}

export default App
