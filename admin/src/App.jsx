import { useEffect, useState } from "react"
import Navbar from "./componenets/Navbar"
import { Login } from "./componenets/Login.jsx"
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from "react-router-dom";
import DashBord from "./pages/DashBord.jsx";
import Events from "./pages/Events.jsx";
import axios from 'axios';
import Attrection from "./pages/Attrection.jsx";
import PartnersPage from "./componenets/patnersComponents/PartnersPage.jsx";
import NightLife from "./pages/NightLife.jsx";

export const backendUrl = import.meta.env.VITE_ECOSIUM_BACKEND_URL;

function App() {
  const [token, setToken] = useState(localStorage.getItem('token') ? localStorage.getItem('token') : "")
  const [partners, setPartners] = useState([]);


  useEffect(() => {
    localStorage.setItem('token', token)
  }, [token])

  useEffect(() => {
    const fetchList = async () => {
      try {
        const response = await axios.get(`${backendUrl}/api/partner/list`);
        if (response.data.success) {
          setPartners(response.data.partners);
        }
      } catch (error) {
        console.error("Error fetching partners:", error);
      }
    };

    fetchList(); // run once on mount
    const interval = setInterval(fetchList, 3000); // poll every 3s


    return () => clearInterval(interval); // cleanup on unmount
  }, [backendUrl]); // only re-run if backendUrl changes



  return (
    <>
      <div className="w-full center flex-col ">
        {
          token === "" ?
            <Login setToken={setToken} /> :
            <>
              <div className="w-full flex items-start justify-between mt-[100px]">

                <Navbar setToken={setToken} />
                <div className="w-[calc(100%-300px)] h-screen items-center justify-center flex fixed top-0 right-0 overflow-y-scroll">
                  <div className="w-full h-full items-start justify-center flex absolute top-0 z-[10]">

                    <Routes>
                      <Route path='/' element={<DashBord token={token} partners={partners} />} />
                      <Route path='/event' element={<Events token={token} partners={partners} />} />
                      <Route path='/night' element={<NightLife token={token} partners={partners} />} />
                      <Route path='/attrection' element={<Attrection token={token} partners={partners} />} />
                      <Route path="/:slug/:mid" element={<PartnersPage token={token} partners={partners} />} />
                    </Routes>
                  </div>

                </div>
              </div>
            </>
        }
      </div>
    </>
  )
}

export default App
