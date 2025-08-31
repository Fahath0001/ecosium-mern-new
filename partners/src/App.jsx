import { Routes, Route } from "react-router-dom";


import axios from 'axios';

import Login from "./components/Login"
import Dashbord from "./pages/Dashbord"
import MinimalLayout from "./components/MinimalLayout"
import { useEffect } from "react";
import { useState } from "react";
import UplodeDetails from "./components/UplodeDetails";
import AddEvent from "./pages/AddEvent";
import Navbar from "./components/Navbar";

export const backendUrl = import.meta.env.VITE_ECOSIUM_BACKEND_URL;

function App() {
  const [token, setToken] = useState(localStorage.getItem('token') ? localStorage.getItem('token') : "");
  const [id, setId] = useState(localStorage.getItem('id') ? localStorage.getItem('id') : "");
  const [status, setStatus] = useState("");

  useEffect(() => {
    localStorage.setItem('token', token);
    localStorage.setItem('id', id);
  }, [token, id]);
  console.log(status);



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
  console.log(token);




  return (
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
                      </Route>
                    </Routes>
                  </div >
                </>
              )

          )

      }
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
