import { useEffect, useState } from "react"
import Navbar from "./componenets/Navbar"
import Sidebar from "./componenets/Sidebar.jsx"
import { Login } from "./componenets/Login.jsx"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from "react-router-dom";
import DashBord from "./pages/DashBord.jsx";
import Add from "./pages/Add.jsx";
import List from "./pages/List.jsx";
import Orders from "./pages/Orders.jsx";

export const backendUrl = import.meta.env.VITE_ECOSIUM_BACKEND_URL;

function App() {
  const [token, setToken] = useState(localStorage.getItem('token') ? localStorage.getItem('token') : "")

  useEffect(() => {
    localStorage.setItem('token', token)
  }, [token])


  return (
    <>
      <div className="w-full center flex-col ">
        <ToastContainer />
        {
          token === "" ?
            <Login setToken={setToken} /> :
            <>
              <Navbar setToken={setToken} />
              <div className="w-full flex items-start justify-between mt-[100px]">
                <Sidebar />
                <div className="w-full h-auto justify-end pl-[350px] ">
                  <Routes>
                    <Route path='/' element={<DashBord token={token} />} />
                    <Route path='/add' element={<Add token={token} />} />
                    <Route path='/list' element={<List token={token} />} />
                    <Route path='/order' element={<Orders token={token} />} />
                  </Routes>
                </div>
              </div>
            </>

        }
      </div>
    </>
  )
}

export default App
