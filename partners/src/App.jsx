import { Routes, Route } from "react-router-dom";


import axios from 'axios';

import Login from "./components/Login"
import Dashbord from "./pages/Dashbord"
import MinimalLayout from "./components/MinimalLayout"
import { useEffect } from "react";
import { useState } from "react";
import UplodeDetails from "./components/UplodeDetails";
import AddEvent from "./pages/AddEvent";
import TermAndContitions from "./pages/TermAndContitions";
import { assets } from "./assets/assets";

export const backendUrl = import.meta.env.VITE_ECOSIUM_BACKEND_URL;

function App() {
  const [token, setToken] = useState(localStorage.getItem('token') ? localStorage.getItem('token') : "");
  const [id, setId] = useState(localStorage.getItem('id') ? localStorage.getItem('id') : "");
  const [status, setStatus] = useState("");

  useEffect(() => {
    localStorage.setItem('token', token);
    localStorage.setItem('id', id);
  }, [token, id]);



  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const response = await axios.get(`${backendUrl}/api/partner/status`, {
          params: { id }
        });
        if (response.data.success) {
          setStatus(response.data.patnerStatus);
        }
      } catch (error) {
        console.error(error);
      }
    };

    if (id) {
      fetchStatus(); // initial fetch

      const interval = setInterval(fetchStatus, 3000); // every 5 seconds
      return () => clearInterval(interval);
    }
  }, [id]);




  return (
    <>
      <div
        className='hidden xl:block'
      >
        <>

          {
            token === "" ?
              <Login setToken={setToken} setId={setId} /> : (
                status === "pending" ?
                  <>
                    <UplodeDetails setToken={setToken} id={id} />
                  </> : (
                    <>
                      <div className="w-full h-auto">
                        <Routes>
                          <Route element={<MinimalLayout />}>
                            <Route path="/" element={<Dashbord setToken={setToken} status={status} />} />
                            <Route path="/add" element={<AddEvent setToken={setToken} />} />
                            <Route path="/term_and_conditions" element={<TermAndContitions />} />
                          </Route>
                        </Routes>
                      </div >
                    </>
                  )

              )
          }
        </>
      </div>

      {
        // Mobile Device
        // Mobile Device
      }
      <div
        className='w-full
                   min-h-screen
                   flex xl:hidden
                   items-center justify-center '
      >
        <div
          className="w-[90%]
                     gap-6
                     items-center justify-center flex flex-col"
        >
          <img
            className="w-[180px]"
            src={assets.logo}
            alt=""
          />
          <h1
            className="text-4xl
                     font-extrabold
                     tracking-[3px]
                     text-primary"
          >
            ECOSIUM
          </h1>
          <h2
            className="w-[70%]
                       text-center
                       text-wrap
                       text-lg"
          >
            content is displayed only on tablets and desktops.
          </h2>
        </div>

      </div>
    </>


  )

  /*
    return (
      <>
        {
          token === "" ?
            <Login setToken={setToken} setId={setId} /> : (
              active != "active" ?
  
  
                <UplodeDetails setToken={setToken} /> : (
                  <>
                    <div className="w-full h-auto">
                      <Routes>
                        <Route element={<MinimalLayout />}>
                          <Route path="/" element={<Dashbord setToken={setToken} setActive={setActive} />} />
                          <Route path="/add" element={<AddEvent setToken={setToken} />} />
                        </Route>
                      </Routes>
                    </div >
                  </>
                )
  
            )
  
        }
      </>
    )
  
  */



}

export default App
