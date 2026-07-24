import Header from "./Components/Header"
import Footer from "./Components/Footer"
import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Service from "./Pages/Service"
import Contact from "./Pages/Contact"
import Cart from "./Pages/Cart"

function App() {
  return <>
    <Header />
    
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/service" element={<Service/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/cart" element={<Cart/>} />
    </Routes>

     <Footer/>

  </>
}


export default App