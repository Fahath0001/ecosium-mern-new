import { Routes, Route } from "react-router-dom"

import Login from "./components/Login"
import Dashbord from "./pages/Dashbord"
import MinimalLayout from "./components/MinimalLayout"
import { useEffect } from "react";
import { useState } from "react";
import UplodeDetails from "./components/UplodeDetails";
import AddEvent from "./pages/AddEvent";

export const backendUrl = import.meta.env.VITE_ECOSIUM_BACKEND_URL;

function App() {
  const [token, setToken] = useState(localStorage.getItem('token') ? localStorage.getItem('token') : "");
  const [active, setActive] = useState(localStorage.getItem('active') ? localStorage.getItem('active') : "");

  useEffect(() => {
    localStorage.setItem('token', token);
    localStorage.setItem('active', active);
  }, [token, active]);
  console.log(active);
  
  

  return (
    <>
      {
        token === "" ?
          <Login setToken={setToken} /> : (
            active != "active" ?
              <UplodeDetails /> : (
                <>
                  <div className="w-full h-auto">
                    <Routes>
                      <Route element={<MinimalLayout />}>
                        <Route path="/"  element={<Dashbord setToken={setToken} setActive={setActive} />} />
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
}

export default App
