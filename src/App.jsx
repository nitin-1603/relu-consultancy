import Layout from "./layout/Layout"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./registration/Login";
import Signup from "./registration/Signup";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' index element={<Layout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <ToastContainer />
      </Router>
    </>
  )
}

export default App
