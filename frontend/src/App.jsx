
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { useState } from "react"
import Register from "./components/Register.jsx"
import Login from "./components/Login.jsx"
import Dashboard from "./components/Dashboard.jsx"
import Navbar from "./components/Navbar.jsx"
import Home from "../pages/Home.jsx"
import Projects from "../pages/Projects.jsx"
import About from "../pages/About.jsx"
import Contact from "../pages/Contact.jsx"
import Footer from "./components/Footer.jsx"
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"

const App = () => {

  const [token, setToken] = useState(localStorage.getItem("token"));

  return (


    <BrowserRouter>
      {/* yaha navbar aayega>> */}
      <Navbar token={token} setToken={setToken} />
      <Routes>

        {/* Public paths */}
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* register page */}
        <Route
          path='/register'
          element={!token ? <Register /> : <Navigate to="/" />}
        />

        {/* Login page */}
        <Route
          path="/login"
          element={!token ? <Login setToken={setToken} /> : <Navigate to="/" />}
        />

        {/* Protected Dashboard */}
        <Route
          path="/dashboard"
          element={token ? <Dashboard token={token} setToken={setToken} /> : <Navigate to="/login" />}
        />

        {/* default Route */}
        <Route
          path="*"
          element={<Navigate to="/" />}
        />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        theme="light"
        toastStyle={{ borderRadius: "10px" }}
      />
      <Footer />
    </BrowserRouter>
  )
}

export default App
